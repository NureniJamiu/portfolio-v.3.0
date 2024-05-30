"use client";

import { useState } from "react";
import { Dock } from "primereact/dock";
import { HomeIcon } from "lucide-react";

const DockComponent = () => {
  const [position, setPosition] = useState("bottom");
  const items = [
    {
      label: "Finder",
      icon: () => (
        <img
          alt="Finder"
          src="https://primefaces.org/cdn/primereact/images/dock/finder.svg"
          width="100%"
        />
      ),
      url: "/test1",
    },
    {
      label: "App Store",
      icon: () => (
        <img
          alt="App Store"
          src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg"
          width="100%"
        />
      ),
      url: "https://www.apple.com",
      separator: true,
    },
    {
      label: "Photos",
      icon: () => (
        <img
          alt="Photos"
          src="https://primefaces.org/cdn/primereact/images/dock/photos.svg"
          width="100%"
        />
      ),
    },
    {
      label: "Trash",
      icon: () => (
        <img
          alt="trash"
          src="https://primefaces.org/cdn/primereact/images/dock/trash.png"
          width="100%"
        />
      ),
    },
  ];

  return (
    <div className="card dock-demo">
      <div
        className="dock-window"
        style={{
          backgroundImage:
            "url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)",
        }}
      >
        <Dock model={items} position={position} />
      </div>
    </div>
  );
};

export default DockComponent;
