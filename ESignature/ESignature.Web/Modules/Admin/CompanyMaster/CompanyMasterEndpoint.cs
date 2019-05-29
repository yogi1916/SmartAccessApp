
namespace ESignature.Admin.Endpoints
{
    using ESignature.DAL;
    using Model;
    using Navigation;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.CompanyMasterRepository;
    using MyRow = Entities.CompanyMasterRow;

    [RoutePrefix("Services/Admin/CompanyMaster"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CompanyMasterController : ServiceEndpoint
    {
        [HttpPost, AllowAnonymous]
        public ActionResult CallPost()
        {
            Notifications notification = new Notifications();
            notification.Message = "And i am iron man!!";
            return PartialView("~/Views/Shared/PartialNotification.cshtml", notification);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            System.Collections.Generic.Dictionary<string, object> dict = new System.Collections.Generic.Dictionary<string, object>();
            if (LoginInfo.CompanyID != 0)
            {
                dict.Add("CompanyMasterId", LoginInfo.CompanyID);
            }
            request.EqualityFilter = dict;
            return new MyRepository().List(connection, request);
        }
    }
}
