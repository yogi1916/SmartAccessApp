
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/EmployeeType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeTypeRow))]
    public class EmployeeTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/EmployeeType/EmployeeTypeIndex.cshtml");
        }
    }
}