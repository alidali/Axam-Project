import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { useState, useEffect } from 'react';
import { Spacer } from 'ui';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

export default function PinnedSubheaderList() {
  const [data, setData] = useState(null);
  const [subCat, setSubCat] = useState(null);
  const [subSubCat, setSubSubCat] = useState(null);
  const [hiddenElement2, setHiddenElement2] = useState(true);
  const [hiddenElement3, setHiddenElement3] = useState(false);
  useEffect(() => {
    const token =
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE';
    fetch('http://5.135.194.236:8181/app/v1/api/get_categories', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())

      .then((data) => setData(data.data));
  }, []);
  console.log(data, 'ddd');
  function handleClick(item , index) {
    setHiddenElement2(true);
    setHiddenElement3(false);
    setSubCat(item.children);
    console.log('index', index)
  }
  function handleClick2(item, index) {
    setHiddenElement3(true);
    setSubSubCat(item.children);
    console.log('sub category' , subCat[index].name)
    console.log('sub sub category', item.children);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'normal' }}>
      <div style={{ border:'1px solid', borderRadius: "8px",borderColor: "grey.300",}}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            justifyContent: 'normal',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {[0].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                {data &&
                  data?.map((item, index) => (
                    <div key={Math.random()}>
                      <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={` ${item.name}`} onClick={() => handleClick(item, index)} />
                      </ListItem>
                    </div>
                  ))}
              </ul>
              
            </li>
          ))}
        </List>
      </div>
      <Spacer width={20} />
      <div style={{ border:'1px solid', borderRadius: "8px",borderColor: "grey.300",}}>
        {hiddenElement2 ? (
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              marginLeft: '2px',
              maxHeight: 300,
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
          >
            {subCat?.map((sectionId, index) => (
              <li key={`section-${index}`}>
                <ul>
                  <div key={Math.random()}>
                    <ListItem key={Math.random()}>
                      <ListItemText primary={` ${sectionId.name}`} onClick={() => handleClick2(sectionId, index)}/>
                    </ListItem>
                  </div>
                </ul>
                
              </li>
            ))}
          </List>
        ) : (
          <></>
        )}
      </div>
      <Spacer width={25} />
      <div style={{ border:'1px solid', borderRadius: "8px",borderColor: "grey.300",}}>
        {hiddenElement3 ? (
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 300,
            
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
          >
            {subSubCat.map((sectionId, index) => (
              <li key={`section-${index}`}>
                <ul>
                  <div key={Math.random()}>
                    <ListItem key={Math.random()}>
                      <ListItemText primary={` ${sectionId.name}`}/>
                    </ListItem>
                  </div>
                </ul>
              </li>
            ))}
          </List>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}