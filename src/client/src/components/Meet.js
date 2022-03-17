import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { generateMeetLink } from "../services/meet";
export default function Meet() {
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState(null);
  const handleClick = () => {
    setLoading(true);
    generateMeetLink(token)
      .then((link) => {
        setLink(link);
        setLoading(false);
      })
      .catch(console.error);
  };
  return (
    <div>
      {loading ? (
        "Generating..."
      ) : (
        <button onClick={handleClick}>Generate meet link</button>
      )}
      <br />
      {link ? (
        <a href={link} target="_blank" referrerPolicy="no-referrer">
          {link}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
