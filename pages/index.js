import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://example-blog.digitalpress.blog",
  key: process.env.GHOST_API_KEY,
  version: "v3",
});

<title>DİSCORD.GG/ATATV31</title>