
namespace ESignature.Employee.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.Employee.Entities;

    [ColumnsScript("Employee.EmployeeMaster")]
    [BasedOnRow(typeof(EmployeeMasterRow), CheckNames = true)]
    public class EmployeeMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 EmployeeMasterId { get; set; }
        [EditLink]
        [Width(150)]
        public String EmployeeCode { get; set; }
        [DisplayName("Department")]
        [Width(100)]
        public String DepartmentDepartmentName { get; set; }
        [DisplayName("Location")]
        [Width(100)]
        [Visible(false)]
        public Int32 CompanyLocationId { get; set; }
        [DisplayName("Salutation")]
        [Width(80)]
        public String SalutationSalutationName { get; set; }
        [Width(200)]
        public String FirstName { get; set; }
        [Width(200)]
        public String MiddleName { get; set; }
        [Width(200)]
        public String LastName { get; set; }
        [Width(200)]
        [DisplayName("Designation")]
        public String DesignationDesignationName { get; set; }
        [Visible(false)]
        public String GenderGenderName { get; set; }
        [Visible(false)]
        public String DivisionDivisionName { get; set; }
        [Visible(false)]
        public String SubDepartmentSubDepartmentName { get; set; }
        [Visible(false)]
        public String MaretialStatusMaretialStatusName { get; set; }
        [Visible(false)]
        public String EmployeeTypeEmployeeTypeName { get; set; }
        [Visible(false)]
        public String EmploymentType { get; set; }
        [Visible(false)]
        public String BloodGroup { get; set; }
        [Visible(false)]
        public String CompanyMasterCompanyName { get; set; }

       
        [Visible(false)]
        public String MobileNumber { get; set; }
        [Visible(false)]
        public String City { get; set; }
        [Visible(false)]
        public String State { get; set; }
        [Visible(false)]
        public String Country { get; set; }
        [Visible(false)]
        public String Address { get; set; }
        [Visible(false)]
        public DateTime DateofBirth { get; set; }
        [Visible(false)]
        public DateTime DateOfJoining { get; set; }
        [Visible(false)]
        public DateTime ResignDate { get; set; }
        [Visible(false)]
        public String EmailAddress { get; set; }
        [Visible(false)]
        public String Email { get; set; }
        [Visible(false)]
        public Int32 ManagerId { get; set; }
        [Visible(false)]
        public String AadharCardNo { get; set; }
        [Visible(false)]
        public Boolean IsExpiryAllowed { get; set; }
        [Visible(false)]
        public DateTime CardExpiry { get; set; }
        [Visible(false)]
        public String PhotoPath { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
        [Visible(false)]
        public String Extra1 { get; set; }
        [Visible(false)]
        public String Extra2 { get; set; }
        [Visible(false)]
        public String Extra3 { get; set; }
        [Visible(false)]
        public String Extra4 { get; set; }
        [Visible(false)]
        public String Extra5 { get; set; }
        [Visible(false)]
        public Boolean IsEmployeeLogin { get; set; }
    }
}