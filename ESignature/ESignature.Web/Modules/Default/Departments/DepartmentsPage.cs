
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Departments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartmentsRow))]
    public class DepartmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Departments/DepartmentsIndex.cshtml");
        }
    }
}