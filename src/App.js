import React from "react";
import { Card } from "@salesforce/design-system-react";

function App() {
  return (
    <Card hasNoHeader={true} bodyClassName="slds-card__body_inner">
      <ul>
        <li>
          <a href="/header">Header</a>
        </li>
        <li>
          <a href="/newsHero">News Hero</a>
        </li>
        <li>
          <a href="/newsStory">News Story</a>
        </li>
        <li>
          <a href="/softHero">Soft Hero</a>
        </li>
        <li>
          <a href="/checklist">Checklist</a>
        </li>
        <li>
          <a href="/checklist_v2">Checklist_v2</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/columns">Columns</a>
        </li>
        <li>
          <a href="/appModule">App</a>
        </li>
        <li>
          <a href="/footer">Footer</a>
        </li>
      </ul>
    </Card>
  );
}

export default App;
