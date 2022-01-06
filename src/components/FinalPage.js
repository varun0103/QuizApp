import React, { useEffect } from "react";
import { loadQuestions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const FinalPage = () => {
  let dispatch = useDispatch();

  let { status } = useSelector((state) => state.data);
  console.log("redux data -> ", status);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadQuestions());
  }, []);

  const uniStats = [
    ...(status &&
      status.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()),
  ];

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "40rem",
          marginTop: "3rem",
          marginLeft: 30,
        }}
      >
        <b>Status</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
          flexDirection: "column",
          marginLeft: 30,
        }}
      >
        {uniStats &&
          uniStats.map((data) => {
            if (data.status === "Correct") {
              return (
                <>
                  <Button
                    key={data.id}
                    sx={{
                      width: "20rem",
                      margin: "1rem",
                      marginLeft: "12rem",
                    }}
                    variant="contained"
                  >
                    Question {data.id} <CheckIcon />
                  </Button>
                </>
              );
            } else {
              return (
                <>
                  <Button
                    key={data.id}
                    sx={{
                      width: "20rem",
                      margin: "1rem",
                      marginLeft: "12rem",
                    }}
                    variant="contained"
                  >
                    Question {data.id} <ClearIcon />
                  </Button>
                </>
              );
            }
          })}
      </Box>
      <Button
        variant="outlined"
        color="error"
        sx={{
          width: "8rem",
          margin: "1rem",
          marginLeft: "39rem",
        }}
        onClick={() => {
          console.log(uniStats);
          navigate("/");
          window.location.reload(true);
        }}
      >
        Restart
      </Button>
    </>
  );
};

export default FinalPage;
