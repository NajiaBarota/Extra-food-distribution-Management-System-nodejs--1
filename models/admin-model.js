var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM userLogin";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},


	update: function(user, callback){
		var sql = "UPDATE userLogin set status='reject' where username=?";

		db.execute(sql, [user], function(status){
			callback(status);
		});
	},

updateAccept: function(user, callback){
		var sql = "UPDATE userLogin set status='accept' where username=?";

		db.execute(sql, [user], function(status){
			callback(status);
		});
	},
	
	
insert: function(user, callback){
		var sql = "INSERT INTO admin values(null, ?)";
		db.execute(sql, [user.post], function(success){
			callback(success);
		});
	},


getNotice: function( callback){
		var sql = "select * from admin ";
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},

deleteNotice: function(id, callback){
		var sql = "delete from admin where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

getNotice2: function( id, callback){
		var sql = "select post from admin where id="+id ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},

updatedata: function(user, callback){
	var sql = "UPDATE user set firstname=?, lastname=?, email=?, phoneno=?, area=? where username=?";
	db.execute(sql, [user.firstname, user.lastname, user.email, user.phoneno, user.area, user.username], function(status){
			callback(status);
		});
},
updatepost: function(user, callback){
		var sql = "UPDATE user set u_img=? where username=?";
		db.execute(sql, [user.photos, user.username], function(status){
			callback(status);
		});

},
getAdminList: function(callback){
		var sql = "select * from user where usertype='admin'" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},	

updateNotice: function(user, callback){
		var sql = "UPDATE admin set post = ? where id = ?";

		db.execute(sql, [user.post, user.id], function(status){
			callback(status);
		});
	},
	
}