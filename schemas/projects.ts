export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "href",
      title: "Href",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "isselected",
      title: "Is Selected",
      type: "boolean",
      initialValue: false
    },
  ],
};
