
namespace ESignature.Default.Endpoints
{
    using ESignature.DAL;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.DesignationsRepository;
    using MyRow = Entities.DesignationsRow;

    [RoutePrefix("Services/Default/Designations"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DesignationsController : ServiceEndpoint
    {
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
            dict.Add("CompanyMasterID", LoginInfo.CompanyID);
            request.EqualityFilter = dict;
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.DesignationsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "CustomerList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
