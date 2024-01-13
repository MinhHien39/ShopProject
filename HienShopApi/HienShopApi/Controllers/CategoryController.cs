using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HienShopApi.Data;
using HienShopApi.Model;

namespace ShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public CategoryController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetAllCategory()
        {
            var categories = await _dataContext.Categories.ToListAsync();
            return Ok(categories);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Category>>> GetCategory(int id)
        {
            var category = await _dataContext.Categories.FindAsync(id);
            if (category is null)
            {
                return NotFound("Category Not Found");
            }
            return Ok(category);
        }
        [HttpPost]
        public async Task<ActionResult<List<Category>>> AddCategory(Category category)
        {
            _dataContext.Categories.Add(category);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Categories.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Category>>> UpdateCategory(Category updatedCategory)
        {
            var dbCategory = await _dataContext.Categories.FindAsync(updatedCategory.CategoryId);
            if (dbCategory is null)
            {
                return NotFound("Category not found");
            }
            dbCategory.CategoryName = updatedCategory.CategoryName;
            dbCategory.CategoryDescription = updatedCategory.CategoryDescription;
            dbCategory.Created_At = updatedCategory.Created_At;
            dbCategory.Updated_At = updatedCategory.Updated_At;
            //dbCategory.Amount = updatedCategory.Amount;
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Categories.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Category>>> DeleteCategory(int id)
        {
            var dbCategory = await _dataContext.Categories.FindAsync(id);
            if (dbCategory is null)
            {
                return NotFound("Category not found");
            }
            _dataContext.Categories.Remove(dbCategory);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Categories.ToListAsync());
        }
    }
}
