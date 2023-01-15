using BLL.DTOs;
using BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAuthor2.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        [HttpPost("add")]
        public IActionResult Add(BookDTO dto)
        {
            try
            {
                return Ok(new { status = "success", data = BookServices.Add(dto) });
            }
            catch (Exception ex)
            {
                return BadRequest(new { status = "Failed", message = ex.Message });
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(new { status="success", data=BookServices.Get() });
            }
            catch (Exception ex)
            {
                return BadRequest(new {status="Failed", message=ex.Message});
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(new {status="success", data=BookServices.Get(id) });
            }
            catch(Exception ex)
            {
                return BadRequest(new { status = "Failed", message = ex.Message });

            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
               BookServices.Delete(id);
               return NoContent();
            }
            catch(Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpPatch]
        public IActionResult Update(BookDTO4 dto)
        {
            try
            {
                return Ok(new {status="success", data=BookServices.Update(dto)});
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
