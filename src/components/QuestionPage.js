import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadQuestionData, getAns } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const QuestionPage = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let { question } = useSelector((state) => state.data);
  const [value, setValue] = useState("");
  const [check, setChecked] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadQuestionData(id));
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
    setChecked(false);
  };

  return (
    <>
      {" "}
      <Card
        sx={{ maxWidth: 400, marginTop: 20, marginLeft: 50, maxHeight: 600 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6 style={{ width: "20rem", color: `#${question.colorCode}` }}>
              {question.title}
            </h6>
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (question.correctchoice === value) {
                let status = "Correct";
                dispatch(getAns(id, status));
              } else {
                let status = "outlined";
                dispatch(getAns(id, status));
              }
              navigate("/");
            }}
          >
            <FormControl component="fieldset">
              <RadioGroup name="radio-buttons-group">
                <FormControlLabel
                  value={`${question.choice && question.choice[0]}`}
                  control={<Radio />}
                  label={`${question.choice && question.choice[0]}`}
                  onChange={handleChange}
                />
                <FormControlLabel
                  value={`${question.choice && question.choice[1]}`}
                  control={<Radio />}
                  label={`${question.choice && question.choice[1]}`}
                  onChange={handleChange}
                />
                <FormControlLabel
                  value={`${question.choice && question.choice[2]}`}
                  control={<Radio />}
                  label={`${question.choice && question.choice[2]}`}
                  onChange={handleChange}
                />
                <FormControlLabel
                  value={`${question.choice && question.choice[3]}`}
                  control={<Radio />}
                  label={`${question.choice && question.choice[3]}`}
                  onChange={handleChange}
                />
              </RadioGroup>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={check}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default QuestionPage;
