using Models;

namespace HR.Repository
{
    public class FileRepo
    {

        public async Task<string> UploadImage(IFormFile profilePicture, int employeeId, int companyId)
        {
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "profile-pictures");
            Directory.CreateDirectory(uploadsFolder);

            var fileExtension = Path.GetExtension(profilePicture.FileName);
            var fileName = $"emp_{employeeId}_{companyId}_{Guid.NewGuid()}{fileExtension}";
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await profilePicture.CopyToAsync(stream);
            }

            return $"/uploads/profile-pictures/{fileName}";
        }


    }
}
