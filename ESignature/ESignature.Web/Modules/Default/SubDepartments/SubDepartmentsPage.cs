
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/SubDepartments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SubDepartmentsRow))]
    public class SubDepartmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/SubDepartments/SubDepartmentsIndex.cshtml");
        }
    }
}