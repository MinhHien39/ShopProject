using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HienShopApi.Data;
using HienShopApi.Model;

namespace ShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public OrderController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetAllOrders()
        {
            var orders = await _dataContext.Orders.ToListAsync();
            return Ok(orders);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Order>>> GetOrder(int id)
        {
            var order = await _dataContext.Orders.FindAsync(id);
            if (order is null)
            {
                return NotFound("order Not Found");
            }
            return Ok(order);
        }
        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddOrder(Order order)
        {
            _dataContext.Orders.Add(order);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Orders.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Order>>> UpdateOrder(Order updateOrder)
        {
            var dbOrder = await _dataContext.Orders.FindAsync(updateOrder.ProductId);
            if (dbOrder is null)
            {
                return NotFound("Product not found");
            }
            dbOrder.CustomerId = updateOrder.CustomerId;
            dbOrder.ProductId = updateOrder.ProductId;
            dbOrder.Status = updateOrder.Status;
            dbOrder.TotalPrice = updateOrder.TotalPrice;
            dbOrder.Created_At = updateOrder.Created_At;
            dbOrder.Updated_At = updateOrder.Updated_At;

            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Orders.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Order>>> DeleteOrder(int id)
        {
            var dbOrder = await _dataContext.Orders.FindAsync(id);
            if (dbOrder is null)
            {
                return NotFound("Order not found");
            }
            _dataContext.Orders.Remove(dbOrder);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Orders.ToListAsync());
        }
    }
}
