import express from "express";

import contactsControllers from "../../controllers/contacts-controller.js";

import { validateBody } from "../../decorators/index.js";

import contactsSchemas from "../../schemas/contacts-schemas.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import isValidId from "../../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.listContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getContactById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactAddSchema),
  contactsControllers.addContact
);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  isValidId,
  validateBody(contactsSchemas.contactAddSchema),
  contactsControllers.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  isEmptyBody,
  isValidId,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsControllers.updateFavorite
);

contactsRouter.delete("/:id", isValidId, contactsControllers.removeContact);

export default contactsRouter;
