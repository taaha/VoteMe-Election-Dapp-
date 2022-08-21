import React from 'react'
import { Label } from 'semantic-ui-react'

const PageFooter = () => (
    <div style={{ position:'absolute',  bottom:10, right:10}}>
    <Label as='a' color='teal' image>
      Developed by
      <Label.Detail>DarthPanda</Label.Detail>
    </Label>
    </div>
)

export default PageFooter;
