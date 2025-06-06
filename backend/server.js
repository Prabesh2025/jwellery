import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import bcrypt, { hash } from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

//Cloudinary configuration
cloudinary.config({
  cloud_name: "dgmtki5zm",
  api_key: "992178428168275",
  api_secret: "qPAqO6zqNuNk0t-mddZ0g8AqYAA", // Click 'View API Keys' above to copy your API secret
});

//App Configuration
const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000","https://jwellery-lime.vercel.app"],
  })
);

// Database connection
try {
  mongoose.connect(
    "mongodb+srv://neupaneprabesh83:Jc5RHiTmQ193zSwC@cluster0.b0kfmqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("✅MongoDB connected successfully");
} catch (error) {
  console.log("❌MongoDB connection error:", error);
}

app.get("/", (req, res) => {
  res.send("Jwellery server is running🚀");
});

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

//Category Table
const categoryTable = mongoose.model("categoryTable", categorySchema);

//Category Routes

//Create
app.post("/api/category", upload.single("imageUrl"), async (req, res) => {
  try {
    const categoryAlreadyExist = await categoryTable.findOne({
      name: req.body.name,
    });
    if (categoryAlreadyExist) {
      return res.status(409).json({
        success: false,
        msg: " Name of category already exists",
        data: null,
      });
    }
    console.log(req.file);

    //Upload image to Cloudinary

    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "Image upload failed",
          data: null,
          error,
        });
      });
    console.log(uploadResult.secure_url);

    const newlyCreatedCategory = await categoryTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });

    return res.status(201).json({
      success: true,
      msg: "Category created successfully",
      data: newlyCreatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get all
app.get("/api/category", async (req, res) => {
  try {
    const allCategory = await categoryTable.find();
    return res.status(201).json({
      success: true,
      msg: "Get all categories success",
      data: allCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get single
app.get("/api/category/:id", async (req, res) => {
  try {
    const singleCategory = await categoryTable.findById(req.params.id);
    return res.status(201).json({
      success: true,
      msg: "Get single category success",
      data: singleCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Update
app.patch("/api/category/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    if (req.file) {
      //Upload image to Cloudinary

      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            msg: "Image upload failed",
            data: null,
            error,
          });
        });

      const updatedCategory = await categoryTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imageUrl: uploadResult.secure_url },
        { new: true }
      );
      return res.status(201).json({
        success: true,
        msg: "Category updated successfully",
        data: updatedCategory,
      });
    }

    const updatedCategory = await categoryTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(201).json({
      success: true,
      msg: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

// Delete
app.delete("/api/category/:id", async (req, res) => {
  try {
    const deletedCategory = await categoryTable.findByIdAndDelete(
      req.params.id
    );
    return res.status(201).json({
      success: true,
      msg: "Category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

// Banner Schema
const bannerSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
});

// Banner Table
const bannerTable = mongoose.model("bannerTable", bannerSchema);

//Banner Routes

//Create
app.post("/api/banner", upload.single("imageUrl"), async (req, res) => {
  try {
    //Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "Image upload failed",
          data: null,
          error,
        });
      });
    console.log(uploadResult.secure_url);

    const newlyCreatedBanner = await bannerTable.create({
      imageUrl: uploadResult.secure_url,
    });

    return res.status(201).json({
      success: true,
      msg: "Banner created successfully",
      data: newlyCreatedBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get all
app.get("/api/banner", async (req, res) => {
  try {
    const allBanner = await bannerTable.find();
    return res.status(200).json({
      success: true,
      msg: "Get all banners success",
      data: allBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get single
app.get("/api/banner/:id", async (req, res) => {
  try {
    const singleBanner = await bannerTable.findById(req.params.id);
    if (!singleBanner) {
      return res.status(404).json({
        success: false,
        msg: "Banner not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Get single banner success",
      data: singleBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Update
app.patch("/api/banner/:id", async (req, res) => {});

// Delete
app.delete("/api/banner/:id", async (req, res) => {
  try {
    const deletedBanner = await bannerTable.findByIdAndDelete(req.params.id);
    if (!deletedBanner) {
      return res.status(404).json({
        success: false,
        msg: "Banner not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Banner deleted successfully",
      data: deletedBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  previousPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categoryTable",
    required: true,
  },
  imageUrl: { type: String, required: true },
});

//Product Table
const productTable = mongoose.model("productTable", productSchema);
//Product Routes

//Create
app.post("/api/products", upload.single("imageUrl"), async (req, res) => {
  try {
    const productAlreadyExist = await productTable.findOne({
      name: req.body.name,
    });
    if (productAlreadyExist) {
      return res.status(409).json({
        success: false,
        msg: "Product with this name already exists, please use a different name",
        data: null,
      });
    }

    //Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "Image upload failed",
          data: null,
          error,
        });
      });

    const newlyCreatedProduct = await productTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });

    return res.status(201).json({
      success: true,
      msg: "Product created successfully",
      data: newlyCreatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get all
app.get("/api/products", async (req, res) => {
  try {
    const allProducts = await productTable.find();
    return res.status(200).json({
      success: true,
      msg: "Get all products succcess",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Get one
app.get("/api/products/:id", async (req, res) => {
  try {
    const singleProduct = await productTable.findById(req.params.id);
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Get single product success",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Update
app.patch("/api/products/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    //if user uploads a new image
    if (req.file) {
      //Upload image to Cloudinary
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            msg: "Image upload failed",
            data: null,
            error,
          });
        });

      const updatedProduct = await productTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imageUrl: uploadResult.secure_url },
        { new: true }
      );
      // If the product is not found, return a 404 error
      if (!updatedProduct) {
        return res.status(404).json({
          success: false,
          msg: "Product not found",
          data: null,
        });
      }
      // If the product is successfully updated, return a 200 response with the updated product
      return res.status(200).json({
        success: true,
        msg: "Product updated successfully",
        data: updatedProduct,
      });
    }

    //if user does not upload a new image
    const updatedProduct = await productTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//Delete
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deletedProduct = await productTable.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // admin , user
});

//User Table
const userTable = mongoose.model("userTable", userSchema);
//User Routes

//1.Create/Register/Sign Up User
app.post("/api/users/register", async (req, res) => {
  try {
    // if email already exists
    const userExistWithEmail = await userTable.findOne({
      email: req.body.email,
    });
    if (userExistWithEmail) {
      return res.status(409).json({
        success: false,
        msg: "User with this email already exists, please use a different email",
        data: null,
      });
    }
    // if username already exists
    const userExistWithUserName = await userTable.findOne({
      userName: req.body.userName,
    });
    if (userExistWithUserName) {
      return res.status(409).json({
        success: false,
        msg: "User with this username already exists, please use a different username",
        data: null,
      });
    }
    // if phone number already exists
    const userExistWithPhoneNumber = await userTable.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (userExistWithPhoneNumber) {
      return res.status(409).json({
        success: false,
        msg: "User with this phone number already exists, please use a different phone number",
        data: null,
      });
    }

    //To hash password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const newlycreatedUser = await userTable.create({
      ...req.body,
      password: hashPassword,
    });
    return res.status(201).json({
      success: true,
      msg: "You have been register successfully",
      data: newlycreatedUser,
    });
  } catch (error) {
    req.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//2.Login /Signin User
app.post("/api/users/login", async (req, res) => {
  try {
    //Check if user exists with email
    const userExist = await userTable.findOne({ email: req.body.email});
    if (!userExist) {
      return res.status(404).json({
        success: false,
        msg: "Please register before login",
        data: null,
      });
    }
    //Check if password is correct
    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      userExist.password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        msg: "Incorrect password",
        data: null,
      });
    }

    //Token generate method
    const myToken = jwt.sign({ data: req.body.email }, "hd709es", {
      expiresIn: "2h",
    });
    return res.status(200).json({
      success: true,
      msg: "Login successful",
      token: myToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//3.Update User(also change password)
app.patch("/api/users/:id", async (req, res) => {
  try {
    // if user wants to change password
    if (req.body.password) {
      //To hash password
      const salt = bcrypt.genSaltSync(saltRounds);
      const newHashedPassword = bcrypt.hashSync(req.body.password, salt);

      const updatedUser = await userTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, password: newHashedPassword },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        msg: "User updated successfully",
        data: updatedUser,
      });
    }
    // if user does not want to change password
    const updatedUser = await userTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // If the user is not found, return a 404 error
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
        data: null,
      });
    }
    
      return res.status(200).json({
      success: true,
      msg: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//4.Delete User
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await userTable.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//5.Get all Users
app.get("/api/users", async (req, res) => {
  try {
    const allUsers = await userTable.find();
    return res.status(200).json({
      success: true,
      msg: "Get all users success",
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

//6.Get single User
app.get("/api/users/:id", async (req, res) => {
  try {
    const singleUser = await userTable.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        msg: "User not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Get single user success",
      data: singleUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error,
    });
  }
});

app.listen(4000, () => {
  console.log("🚀Server is running on port 4000");
});
