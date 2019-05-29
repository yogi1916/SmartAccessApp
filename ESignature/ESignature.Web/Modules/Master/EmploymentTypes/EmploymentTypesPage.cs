
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/EmploymentTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmploymentTypesRow))]
    public class EmploymentTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/EmploymentTypes/EmploymentTypesIndex.cshtml");
        }
    }
}