const express = require("express");
const router = express.Router();
const { protect, staffAndAdminProtect, adminProtect } = require("../middleware/auth");

const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");

/**
 * @swagger
 * /api/categories/getAllCategories:
 *   get:
 *     tags: [Category]
 *     operatorId: getAllCategories
 *     description: Get all categories
 *     parameters:
 *       - in: query
 *         name: search
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.route("/getAllCategories").get(getAllCategories);

/**
 * @swagger
 * /api/categories/getCategoryById/{id}:
 *   get:
 *     tags: [Category]
 *     operatorId: getCategoryById
 *     description: Get category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Not Found
 */
router.route("/getCategoryById/:categoryId").get(getCategoryById);

/**
 * @swagger
 * /api/categories/createCategory:
 *   post:
 *     tags: [Category]
 *     operatorId: createCategory
 *     description: Create new category
 *     security:
 *      - bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.route("/createCategory").post(staffAndAdminProtect, createCategory);

/**
 * @swagger
 * /api/categories/updateCategory/{id}:
 *   put:
 *     tags: [Category]
 *     operatorId: updateCategory
 *     description: Update category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
router.route("/updateCategory/:categoryId").put(updateCategory);

/**
 * @swagger
 * /api/categories/deleteCategory/{id}:
 *   delete:
 *     tags: [Category]
 *     operatorId: deleteCategory
 *     description: Delete category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Deleted
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
router.route("/deleteCategory/:categoryId").delete(deleteCategory);

module.exports = router;