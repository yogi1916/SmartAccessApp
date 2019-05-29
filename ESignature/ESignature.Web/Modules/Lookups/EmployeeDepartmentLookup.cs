
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
    public class EmployeeDepartmentLookup : RowLookupScript<DepartmentsRow>
    {
        public EmployeeDepartmentLookup()
        {
            IdField = DepartmentsRow.Fields.DepartmentId.PropertyName;
            TextField = DepartmentsRow.Fields.DepartmentName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            if (LoginInfo.CompanyID == null || LoginInfo.CompanyID == 0)
            {
                var fld = DepartmentsRow.Fields;
                query.Distinct(true)
                    .Select(fld.DepartmentId, fld.DepartmentName);
            }
            else
            {
                if (LoginInfo.Locations == null)
                {
                    var fld = DepartmentsRow.Fields;
                    query.Distinct(true)
                        .Select(fld.DepartmentId, fld.DepartmentName)
                           .Where(fld.CompanyLocationCompanyMasterId == LoginInfo.CompanyID.ToString());
                }
                else
                {
                    var fld = DepartmentsRow.Fields;
                    query.Distinct(true)
                        .Select(fld.DepartmentId, fld.DepartmentName)
                           .Where(fld.CompanyLocationCompanyMasterId == LoginInfo.CompanyID.ToString() && fld.CompanyLocationId.In(LoginInfo.Locations));
                }
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            base.ApplyOrder(query);
        }
    }
}