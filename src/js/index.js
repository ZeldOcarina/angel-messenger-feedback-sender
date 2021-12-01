import "babel-core/register";
import "babel-polyfill";
import "bootstrap";

import formHandler from "./_form";
import "./_password-form";
import "../scss/index.scss";
import "./_modal";

formHandler();
