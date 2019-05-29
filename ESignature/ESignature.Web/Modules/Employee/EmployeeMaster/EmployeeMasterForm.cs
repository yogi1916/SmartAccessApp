
namespace ESignature.Employee.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.Admin.Entities;
    using ESignature.Default.Entities;
    using ESignature.Master.Entities;
    using SmartCommandControl.Northwind.Lookups;
    using ESignature.Employee.Entities;

    [FormScript("Employee.EmployeeMaster")]
    [BasedOnRow(typeof(EmployeeMasterRow), CheckNames = true)]
    public class EmployeeMasterForm
    {

        [Category("Employee Master Info")]
        [LookupEditor(typeof(CompanyDesignationLookup), AutoComplete = true, InplaceAdd = true)]
        [MediumHalfWidth]
        [DisplayName("Company")]
        public Int32 CompanyMasterId { get; set; }
        [LookupEditor(typeof(EmployeeDepartmentLookup), AutoComplete = true)]
        [MediumHalfWidth]
        [DisplayName("Department")]
        public Int32 DepartmentId { get; set; }
        [LookupEditor(typeof(SubDepartmentsRow))]
        [MediumHalfWidth]
        [DisplayName("SubDepartmentRow")]
        public Int32 SubDepartmentId { get; set; }
        [LookupEditor(typeof(EmployeeLocationLookup),AutoComplete =true)]        
        [MediumHalfWidth]
        [DisplayName("Location")]
        public Int32 CompanyLocationId { get; set; }        
        [MediumHalfWidth]        
        [LookupEditor(typeof(EmployeeDesignatinLookup), AutoComplete = true, InplaceAdd = true)]
        public Int32 DesignationId { get; set; }
        [LookupEditor(typeof(DivisionMasterRow))]
        [MediumHalfWidth]
        [DisplayName("Division")]      
        public Int32 DivisionId { get; set; }
        

        [Category("Basic Info")]
        [MediumHalfWidth]
        public String EmployeeCode { get; set; }
        [LookupEditor(typeof(EmployeeCardPoolLookup))]
        [DisplayName("Select Card"),Hint("This is regulaar card")]
        [MediumHalfWidth]
        public String CardNo { get; set; }
        [MediumHalfWidth]
        [DisplayName("Saluation")]
        [LookupEditor(typeof(SalutationRow))]
        public Int32 SalutationId { get; set; }
        [MediumHalfWidth]
        public String FirstName { get; set; }
        [MediumHalfWidth]
        public String MiddleName { get; set; }
        [MediumHalfWidth]
        public String LastName { get; set; }
        [MediumHalfWidth]
        [DisplayName("Gender")]
        [LookupEditor(typeof(GenderRow))]
        public Int32 GenderId { get; set; }
        [MediumHalfWidth]
        [DisplayName("Maretial Status")]
        [LookupEditor(typeof(MaretialStatusRow))]
        public Int32 MaretialStatusId { get; set; }
        [MediumHalfWidth]
        [DisplayName("Employee Type")]
        [LookupEditor(typeof(EmployeeTypeRow))]
        public Int32 EmployeeTypeId { get; set; }
        [MediumHalfWidth]
        [DisplayName("Employment Type")]
        [LookupEditor(typeof(EmploymentTypesRow))]
        public Int32 EmploymentTypeId { get; set; }
        [MediumHalfWidth]
        [DisplayName("Blood Group")]
        [LookupEditor(typeof(BloodGroupsRow))]
        public Int32 BloodGroupId { get; set; }
        [DateEditor]
        [MediumHalfWidth]
        public DateTime DateofBirth { get; set; }
        [MediumHalfWidth]
        [DateEditor]
        public DateTime DateOfJoining { get; set; }

        [Category("Contact Info and Address")]
        [MediumHalfWidth]
        public String MobileNumber { get; set; }
        [MediumHalfWidth]
        public String City { get; set; }
        [MediumHalfWidth]
        public String State { get; set; }
        [MediumHalfWidth]
        public String Country { get; set; }
        [MediumHalfWidth]
        public String Address { get; set; }
        [Visible(false)]
        [MediumHalfWidth]
        public String EmailAddress { get; set; }
        [EmailEditor]
        [MediumHalfWidth]
        public String Email { get; set; }
        [Category("Employee Extra Info")]
        [MediumHalfWidth]
        public DateTime ResignDate { get; set; }
        [MediumHalfWidth]
        public Boolean IsEmployeeLogin { get; set; }
        [MediumHalfWidth]
        [Visible(false)]
        public Int32 ManagerId { get; set; }
        [MediumHalfWidth]
        public String AadharCardNo { get; set; }
        [MediumHalfWidth]
        public Boolean IsExpiryAllowed { get; set; }
        [MediumHalfWidth]
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

        
    }
}