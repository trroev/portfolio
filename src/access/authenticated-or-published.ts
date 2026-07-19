import type { Access } from "payload";

export const authenticatedOrPublished: Access = ({ req }) => {
  if (req.user) {
    return true;
  }
  return {
    _status: {
      equals: "published",
    },
  };
};
