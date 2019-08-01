import React from 'react';
import{ Paper, Tabs } from "@material-ui/core";
import Tab from '@material-ui/core/Tab';


export default ({team}) =>
<div>
<Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
          <Tab label= "All" />
          {team.map(sqaud =>
            <Tab label= {sqaud} />
            )}
        
       
      </Tabs>
    </Paper>
</div>