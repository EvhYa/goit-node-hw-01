import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
   switch (action) {
      case "list":
         const contacts = await listContacts();
         console.table(contacts);
         break;

      case "get":
         const contact = await getContactById(id);
         console.log(contact);
         break;

      case "add":
         const newContact = await addContact(name, email, phone);
         console.log(newContact);
         break;

      case "remove":
         const removedContact = await removeContact(id);
         console.log(removedContact);
         break;

      default:
         console.warn("\x1B[31m Unknown action type!");
   }
};

program.option("-a, --action <type>").option("-i, --id <type>").option("-n, --name <type>").option("-e, --email <type>").option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
