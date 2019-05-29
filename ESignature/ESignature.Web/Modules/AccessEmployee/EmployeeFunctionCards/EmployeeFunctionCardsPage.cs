
namespace ESignature.AccessEmployee.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AccessEmployee/EmployeeFunctionCards"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeFunctionCardsRow))]
    public class EmployeeFunctionCardsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AccessEmployee/EmployeeFunctionCards/EmployeeFunctionCardsIndex.cshtml");
        }
    }
}