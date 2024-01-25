using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HienShopApi.Data;
using HienShopApi.Model;

namespace ShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ProductController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            var products = await _dataContext.Products.ToListAsync();
            return Ok(products);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetProduct(int id)
        {
            var product = await _dataContext.Products.FindAsync(id);
            if (product is null)
            {
                return NotFound("Product Not Found");
            }
            return Ok(product);
        }

        [HttpGet("categoryId")]
        public async Task<ActionResult<IEnumerable<Product>>> GetByCategoryId(int categoryId)
        {
            // Lấy dữ liệu sản phẩm theo categoryId
            var products = await _dataContext.Products
                .Where(product => product.CategoryId == categoryId)
                .ToListAsync();

            // Trả về dữ liệu sản phẩm
            return Ok(products);
        }
        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddProduct(Product product)
        {
            _dataContext.Products.Add(product);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Products.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateProduct(Product updateProduct)
        {
            var dbProduct = await _dataContext.Products.FindAsync(updateProduct.ProductId);
            if (dbProduct is null)
            {
                return NotFound("Product not found");
            }
            dbProduct.ProductName = updateProduct.ProductName;
            dbProduct.ProductDescription = updateProduct.ProductDescription;
            dbProduct.Price = updateProduct.Price;
            dbProduct.Quantity = updateProduct.Quantity;
            dbProduct.ImageUrl = updateProduct.ImageUrl;
            dbProduct.Created_At = updateProduct.Created_At;
            dbProduct.Updated_At = updateProduct.Updated_At;
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Products.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Product>>> DeleteProduct(int id)
        {
            var dbProduct = await _dataContext.Products.FindAsync(id);
            if (dbProduct is null)
            {
                return NotFound("Product not found");
            }
            _dataContext.Products.Remove(dbProduct);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Products.ToListAsync());
        }
    }
}
