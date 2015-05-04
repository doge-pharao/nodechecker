function Header (name, value) {
	this.name = name;
	this.value = value;
};

Header.prototype.constructor = Header;

module.exports = Header;