import fs from 'fs';
export async function getUsers(ctx) {
  return new Promise(resolve => {
		fs.readFile('././db/users.json', 'utf8', async (err, data) => {
			const arr = await Promise.all(JSON.parse(data).map(async (x) => {
				x.phone = x.phone.replaceBetween(2, 7, "*****")
				return x;
			}));
			resolve(arr); 
		});
	}).then(data => {
		ctx.body = data;
	})
}
String.prototype.replaceBetween = function(start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
};