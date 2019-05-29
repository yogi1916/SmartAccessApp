
namespace SmartCommandControl.Northwind.Lookups
{
    using ESignature.Admin.Entities;
    using ESignature.Admin.Repositories;
    using ESignature.DAL;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;

    //[LookupScript]
    [LookupScript(Expiration = -1)]
    public class EmployeeDesignatinLookup : RowLookupScript<DesignationsRow>
    {
        public EmployeeDesignatinLookup()
        {
            IdField = DesignationsRow.Fields.DesignationId.PropertyName;
            TextField = DesignationsRow.Fields.DesignationName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            if (LoginInfo.CompanyID == null || LoginInfo.CompanyID == 0)
            {
                var fld = DesignationsRow.Fields;
                query.Distinct(true)
                    .Select(fld.DesignationId, fld.DesignationName);
            }
            else
            {
                var fld = DesignationsRow.Fields;
                query.Distinct(true)
                    .Select(fld.DesignationId, fld.DesignationName)
                       .Where(fld.CompanyMasterId == LoginInfo.CompanyID.ToString());
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            base.ApplyOrder(query);
        }
    }
}