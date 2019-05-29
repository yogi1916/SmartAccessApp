
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/Salutation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SalutationRow))]
    public class SalutationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/Salutation/SalutationIndex.cshtml");
        }
    }
}