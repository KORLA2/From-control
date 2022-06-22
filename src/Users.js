import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography } from "@material-ui/core";

function Users({ data, setclicked }) {
  return (
    <List>
      {data?.map((elem, id) => (
        <Card
          key={id}
          onClick={() => {
            setclicked([elem.name, elem.id, elem.address]);
          }}
          style={{
            cursor: "pointer",
            border: "0.8px solid black",
            margin: "2px",
            backgroundColor: " rgb(219, 18, 85) !important",
          }}
        >
          <CardContent>
            <Flex>
              <Typography color="textPrimary" variant="h6">
                Name :
              </Typography>

              <Typography color="textSecondary" variant="p">
                {elem.name}
              </Typography>
            </Flex>

            <Flex>
              <Typography color="textPrimary" variant="h6">
                Id :
              </Typography>

              <Typography color="textSecondary" variant="h5">
                {elem.id}
              </Typography>
            </Flex>
            <Flex>
              <Typography color="textPrimary" variant="h6">
                Location:
              </Typography>

              <Typography color="textSecondary" variant="h5">
                {elem.address}
              </Typography>
            </Flex>
            <Flex>
              <Typography color="textPrimary" variant="h6">
                Title:
              </Typography>

              <Typography color="textSecondary" variant="h5">
                {elem?.title}
              </Typography>
            </Flex>

            <Flex>
              <Typography color="textPrimary" variant="h6">
                Body:
              </Typography>

              <Typography color="textSecondary" variant="h5">
                {elem?.body}
              </Typography>
            </Flex>
          </CardContent>
        </Card>
      ))}
    </List>
  );
}

export default Users;

let List = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
let Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
