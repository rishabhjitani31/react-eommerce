import React, { Fragment } from "react";
import { StyledInfoCard } from "./styles";
import Button from "~/components/Button";
import AddIcon from "~/icons/plus-icon";

const InfoCard = ({ addNew = false, addNewTitle, title, description }) => {
  return (
    <StyledInfoCard addNew={addNew}>
      {addNew ? (
        <div className="add-new-container">
          <div className="icon-section">
            <AddIcon />
          </div>
          <p>{`Add New ${addNewTitle}`}</p>
        </div>
      ) : (
        <Fragment>
          <h4>{title}</h4>
          <p>{description}</p>
          <Button color="primary">Edit</Button>
        </Fragment>
      )}
    </StyledInfoCard>
  );
};

export default InfoCard;
