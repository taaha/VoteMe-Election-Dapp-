const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/ElectionFactory.json");
const compiledElection = require("../ethereum/build/Election.json");

let accounts;
let factory;
let electionAddress;
let election;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.deployElection('3','60').send({
    from: accounts[0],
    gas: "1000000",
  });

  [electionAddress] = await factory.methods.getDeployedElections().call();
  election = await new web3.eth.Contract(
    JSON.parse(compiledElection.interface),
    electionAddress
  );
});

describe("Elections", () => {
  it("deploys a factory and an election", () => {
    assert.ok(factory.options.address);
    assert.ok(election.options.address);
  });

  it('marks caller as election manager', async () => {
    const manager = await election.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to register as candidate', async () => {
    await election.methods.signAsCandidate('khan','better future').send({
        from: accounts[1],
        gas: "1000000",
    });
    await election.methods.signAsCandidate('zardari','jiye bhutto').send({
        from: accounts[2],
        gas: "1000000",
    });
    await election.methods.signAsCandidate('sharif','more development').send({
        from: accounts[3],
        gas: "1000000",
    });
    const isCandidate1 = await election.methods.candidates(accounts[1]).call();
    const isCandidate2 = await election.methods.candidates(accounts[2]).call();
    const isCandidate3 = await election.methods.candidates(accounts[3]).call();
    assert(isCandidate1 & isCandidate2 & isCandidate3);
  });

  it('allows people to register only once as candidate', async () => {
    await election.methods.signAsCandidate('khan','better future').send({
        from: accounts[1],
        gas: "1000000",
    });

    try {
        await election.methods.signAsCandidate('khan','better future').send({
            from: accounts[1],
            gas: "1000000",
        });
        assert(false);
    } catch(err) {
        assert(err);
    }
  });

  it('allows manager to start voting', async () => {
    //setTimeout(() => console.log("Howdy!"), 10000)
    await election.methods.startVoting().send({
        from: accounts[0],
        gas: "1000000",
    });

    const startVote = await election.methods.startVote().call();
    assert(startVote);
  });
  
});
