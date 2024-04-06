/* eslint-disable eqeqeq */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import uploadimg from "./Assets/uploadimg.png";
import "./MultipleProductUpload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Papa from "papaparse";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OutputDashboard from "./OutputDashboard";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "./context/auth/AuthState";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../base";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { hiIN } from "@mui/material/locale";
import Alert from "@mui/material/Alert";


const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  hiIN
);



return (
    <>
      {alertData.alert && (
        <Alert variant="filled" severity={alertData.severity}>
          {alertData.message}
        </Alert>
      )}
    
      <table id="maintable">
        <thead>
          <tr>
            <th className="pdt-id">Question_ID</th>
            <th className="sku">Question</th>
            <th>Language</th>
            <th className="upimg">Code</th>
            
          </tr>
        </thead>

        <tbody>
          {CSVfile.map((value, i) => (
            <tr key={i}>
              {/* Question ID */}
              <td>
                <ThemeProvider theme={theme}>
                  <TextareaAutosize
                    id="standard-textarea"
                    className="numberinput"
                    variant="standard"
                    type="number"
                    value={value.Question_ID}
                    onChange={(e) =>
                      handleChange(i, "Question_ID", e.target.value)
                    }
                  />
                </ThemeProvider>
              </td>
            
              {/* Product Title */}
              <td>
                <ThemeProvider theme={theme}>
                  <TextareaAutosize
                    id="standard-textarea"
                    variant="standard"
                    type="text"
                    value={value.Question}
                    onChange={(e) =>
                      handleChange(i, "Question", e.target.value)
                    }
                  />
                </ThemeProvider>
              </td>

                {/* Product Description */}
                <td>
                <TextareaAutosize
                  id="standard-textarea"
                  variant="standard"
                  type="text"
                  value={value.Language}
                  onChange={(e) =>
                    handleChange(i, "Language", e.target.value)
                  }
                />
              </td>
              {/* Product Images */}
              <td>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  style={{ width: "30px", height: "40px" }}
                  onClick={() => handleViewImage(i)}
                ></Button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  );


export default TableCodes;