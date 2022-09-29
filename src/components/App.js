import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import KeywordsContainer from "./KeywordsList";
import CampaignDetails from "./CampaignDetails";

export const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={KeywordsContainer} />
        <Route path="/campaign-details" exact component={CampaignDetails} />
      </BrowserRouter>
    </div>
  );
};

export default App;
