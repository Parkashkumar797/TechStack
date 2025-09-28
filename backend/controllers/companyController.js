import companyModel from "../models/companyModel.js";

// Register new company
export const register = async (req, res) => {
    const { companyName, description, logoUrl, website } = req.body;

    if (!companyName || !description || !logoUrl || !website) {
        return res.json({ success: false, message: "All fields are necessary" });
    }

    try {
        const existingCompany = await companyModel.findOne({ website });

        if (existingCompany) {
            return res.json({ success: false, message: "Company already exists" });
        }

        const company = new companyModel({ companyName, description, logoUrl, website });
        await company.save();

        console.log("New company saved:", company);

        return res.json({ success: true, message: "Company registered successfully", company });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

// Get all companies
export const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyModel.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, companies });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching companies", error: error.message });
    }
};

// Get company by ID
export const getCompanyById = async (req, res) => {
    try {
        const company = await companyModel.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }
        res.status(200).json({ success: true, company });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching company", error: error.message });
    }
};

// Delete company
export const deleteCompany = async (req, res) => {
    try {
        const company = await companyModel.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }
        res.json({ success: true, message: "Company deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
