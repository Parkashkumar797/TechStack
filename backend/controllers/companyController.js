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
// ✅ Update Company Profile
export const updateCompanyProfile = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const updates = req.body;

    const updatedCompany = await companyModel.findByIdAndUpdate(
      companyId,
      updates,
      { new: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json(updatedCompany);
  } catch (error) {
    console.error("Error updating company profile:", error);
    res.status(500).json({ message: "Error updating company profile" });
  }
};

export const getCompanyProfile = async (req, res) => {
  try {
    // If using auth middleware
    const companyId = req.user?.id || req.params.companyId || req.query.id;
    if (!companyId) return res.status(400).json({ success: false, message: "Company id not provided" });

    const company = await companyModel.findById(companyId).select("-password");
    if (!company) return res.status(404).json({ success: false, message: "Company not found" });

    return res.status(200).json({ success: true, company });
  } catch (err) {
    console.error("Error getting company profile:", err);
    return res.status(500).json({ success: false, message: "Error fetching company profile" });
  }
};