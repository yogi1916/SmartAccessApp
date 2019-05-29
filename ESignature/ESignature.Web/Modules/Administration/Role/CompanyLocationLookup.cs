
namespace SmartCommandControl.Northwind.Lookups
{
    using ESignature.Administration.Entities;
    using ESignature.DAL;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CompanyLocationLookup : RowLookupScript<RoleRow>
    {
        public CompanyLocationLookup()
        {
            IdField = TextField = RoleRow.Fields.Locations.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = RoleRow.Fields;
            query.Distinct(true)
                .Select(fld.Locations)               
                .Where(
                    new Criteria(fld.Locations) != "");
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}