'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home')
  }
  async vue() {
  	await this.ctx.render('vue');
  }
  async react() {
  	await this.ctx.render('react');
  }
}

module.exports = HomeController;
