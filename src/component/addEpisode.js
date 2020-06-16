import React from "react";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const AddEpisode = () => {
  const [rates, setRates] = React.useState([
    { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
  ]);
  console.log(rates);
  const addRate = () => {
    setRates([
      ...rates,
      { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
    ]);
  };

  const handleChange = (event) => {
    const updateForm = [...rates];
    updateForm[event.target.dataset.id][event.target.className] =
      event.target.value;
    setRates(updateForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  var styl = {
    color: "white",
    border: 3,
    backgroundColor: "#1F1F1F",
    borderColor: "white",
    width: 400,
    height: 35,
    marginBottom: 10,
  };
  var styl1 = {
    color: "white",
    border: 3,
    backgroundColor: "#1F1F1F",
    borderColor: "white",
    width: 475,
    height: 35,
    marginBottom: 10,
    marginTop: 8,
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {rates.map((row, index) => {
          const titleEpisodeId = `title-${index}`,
            attachThumbnailId = `attach-${index}`,
            linkFilmId = `link-${index}`;
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="title"
                autoFocus
                style={styl}
                name={titleEpisodeId}
                data-id={index}
                id={titleEpisodeId}
              />
              <input
                accept="image/*"
                className=""
                style={{ display: "none" }}
                type="file"
                name={attachThumbnailId}
                data-id={index}
                id={attachThumbnailId}
              />
              <label htmlFor={attachThumbnailId}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    maxWidth: 8,
                    marginLeft: 10,
                  }}
                  component="span"
                  className=""
                >
                  <AttachFileIcon style={{ color: "#1F1F1F" }} />
                </Button>
              </label>{" "}
              <br></br>
              <input
                type="text"
                placeholder="link filem"
                style={styl1}
                name={linkFilmId}
                data-id={index}
                id={linkFilmId}
              />
              <br></br>
            </div>
          );
        })}
        <Button
          variant="contained"
          color="secondary"
          style={{ width: 470, marginTop: 7, marginRight: 10 }}
          className=""
          onClick={addRate}
        >
          +
        </Button>
      </form>
    </div>
  );
};

export default AddEpisode;
