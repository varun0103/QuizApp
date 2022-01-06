import React, { useEffect, useState } from "react";
import { loadQuestions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Construction } from "@mui/icons-material";

function Question() {
  let dispatch = useDispatch();
  const { questions } = useSelector((state) => state.data);
  const { status } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const [style, setStyle] = useState("");

  useEffect(() => {
    dispatch(loadQuestions());
  }, []);

  const checkQuestionAnswered = (qData, answeredQuestion) => {
    // console.log(qData, "Data for id", answeredQuestion);
    let present = false;
    answeredQuestion.forEach((element) => {
      if (element.id == qData.id) {
        present = true;
      }
    });
    return present;
  };

  const FinalPage = () => {
    let nav = false;
    if (questions.length && questions.length === status.length) {
      nav = true;
    }
    return nav;
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const Display = () => {
    // console.log(shuffle(questions));
    // FinalPage();
    // console.log(questions.length);
    // console.log(status.length);
    return (
      <>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "40rem",
            marginTop: "3rem",
            marginLeft: "20%",
          }}
        >
          <b>Select Questions</b>
        </Typography>

        {questions &&
          questions.map((data, index) => {
            // console.log(
            //   checkQuestionAnswered(data, status),
            //   "Checking status "
            // );
            return (
              <Box
                key={data.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20%",
                }}
              >
                {" "}
                {checkQuestionAnswered(data, status) ? (
                  <Button
                    sx={{
                      width: "20rem",
                      margin: "1rem",
                      marginLeft: "10rem",
                    }}
                    disabled
                    variant="contained"
                    onClick={() => {
                      setStyle("visited");
                      navigate(`/questions/${data.id}`);
                    }}
                  >
                    Question {data.id}
                  </Button>
                ) : (
                  <Button
                    sx={{
                      width: "20rem",
                      margin: "1rem",
                      marginLeft: "10rem",
                    }}
                    variant="contained"
                    onClick={() => {
                      setStyle("visited");
                      navigate(`/questions/${data.id}`);
                    }}
                  >
                    Question {data.id}
                  </Button>
                )}
              </Box>
            );
          })}
      </>
    );
  };
  return <div>{!FinalPage() ? <Display /> : navigate("/finalpage")}</div>;
}

export default Question;
