package controllers;


import play.data.DynamicForm;
import play.data.Form;
import play.mvc.*;
import views.html.*;
/**Controler managing all account featers.
 * 
 * @author Kamil Malinowski
 *
 */
public class AccountController extends Controller {
	
	public Result loginGet(){
		return ok(login.render());
	}
	
	public Result loginPost(){
		@SuppressWarnings("deprecation")
		DynamicForm dynamicForm = Form.form().bindFromRequest();
		return ok(logged.render("Zalogowany jako: "+dynamicForm.get("login")));
	}
}
