<?php
 namespace Admin\Controller; use Think\Controller; use Think\Page; class AreaController extends CommonController { public function index() { $this->mb(); $this->display(); } public function list_index() { goto p1dqy; cxDJ6: $page = new Page($count, 10); goto dKXcu; nCAYu: $where = "\x20\165\x6e\151\x61\143\x69\x64\75" . $this->uniacid; goto djzb5; GQxSI: $limit = $page->firstRow . "\x2c" . $page->listRows; goto xjgDm; KPOUm: $this->count = $count; goto cxDJ6; xjgDm: $rs = M("\x61\x72\145\x61\x5f\160\162\x69\x63\x65")->where($where)->limit($limit)->order("\x6e\151\144\x20\x64\145\163\x63")->select(); goto UGwcy; p1dqy: $this->mb(); goto nCAYu; E4UMZ: $this->rs = $rs; goto DbmX3; UGwcy: foreach ($rs as $k => $v) { goto t6iLW; f1Bbc: if ($rt) { goto AIVsd; } goto HKJ73; iwfIS: DFm2b: goto bGdmy; PBy3R: AIVsd: goto IAAOm; IAAOm: $rs[$k]["\156\143\154\141\x73\163\61"] = $rt["\x6e\141\x6d\x65"]; goto ne1Uc; aOKsS: goto ITwKd; goto PBy3R; HKJ73: $rs[$k]["\x6e\x63\154\141\163\x73\x31"] = "\351\241\266\347\xba\247"; goto aOKsS; ne1Uc: ITwKd: goto iwfIS; t6iLW: $rt = M("\x61\162\x65\141\x5f\160\162\151\143\145")->find($v["\x70\x5f\151\144"]); goto f1Bbc; bGdmy: } goto PajUy; PajUy: UPh6X: goto E4UMZ; dKXcu: $this->page = $page->show(); goto GQxSI; DbmX3: $this->display(); goto h_gWU; djzb5: $count = M("\141\x72\x65\x61\x5f\x70\162\x69\x63\x65")->where($where)->count(); goto KPOUm; h_gWU: } public function list_add() { goto Hmpuj; Hmpuj: $this->mb(); goto Ilipr; n7M1w: $this->display(); goto oFuCh; Ilipr: $this->rs = M("\141\162\145\x61\x5f\x70\162\151\x63\x65")->where("\160\x5f\151\144\75\x30\x20\x61\156\144\40\x6e\x73\164\141\x74\165\x73\75\61\40\141\x6e\144\40\x75\156\x69\141\x63\x69\144\75" . $this->uniacid)->order("\156\x69\144\x20\x64\x65\163\x63")->select(); goto n7M1w; oFuCh: } public function list_addhandle() { goto bVYfu; GBTE7: OZXvT: goto YDUxJ; AS3ta: goto X6IQE; goto kS093; fAZHv: $param["\141\144\x64\x74\151\x6d\145"] = date("\x59\x2d\155\55\144\40\x48\72\151\72\163"); goto b4x7m; uD9A4: $rs = M("\x61\162\x65\x61\137\x70\x72\151\x63\x65")->where("\x6e\141\155\145\x3d\x27" . I("\x6e\x61\155\x65") . "\47\40\141\x6e\x64\40\x75\x6e\x69\x61\x63\151\x64\x3d" . $this->uniacid)->find(); goto Rdbno; QEq_M: if (I("\x6e\x61\x6d\145") != '') { goto LtVRz; } goto S9G24; bVYfu: $this->mb(); goto z7_ph; b3ZyP: $this->error("\xe6\x93\x8d\344\xbd\234\345\xa4\261\350\264\245"); goto wl9L4; wl9L4: goto fDWQe; goto GBTE7; fo9fu: $this->error("\345\x9f\216\345\270\x82\xe5\x90\215\xe7\xa7\260\351\x87\215\345\xa4\x8d\xef\274\214\346\223\215\xe4\xbd\234\345\xa4\261\xe8\264\245"); goto oxTsJ; wBLY0: X6IQE: goto GxEuV; YDUxJ: $this->success("\xe6\223\215\xe4\xbd\x9c\346\210\220\345\x8a\237", U("\x41\162\x65\x61\57\154\x69\163\x74\x5f\151\156\144\145\170")); goto QtZek; oxTsJ: Ygly4: goto fAZHv; kS093: LtVRz: goto uD9A4; b4x7m: $param["\167\157\x72\144"] = strtoupper($param["\x77\x6f\162\x64"]); goto erH7A; Rdbno: if (!$rs) { goto Ygly4; } goto fo9fu; QtZek: fDWQe: goto wBLY0; erH7A: $param["\165\x6e\151\141\143\x69\x64"] = $this->uniacid; goto u7k9V; u7k9V: if (M("\141\x72\145\141\x5f\x70\162\151\143\x65")->add($param)) { goto OZXvT; } goto b3ZyP; z7_ph: $param = I("\160\x6f\x73\164\56"); goto QEq_M; S9G24: $this->error("\xe5\x9f\216\xe5\270\202\xe5\x90\x8d\347\247\xb0\xe4\xb8\215\xe8\203\xbd\xe4\xb8\272\347\251\272"); goto AS3ta; GxEuV: } public function list_modi() { goto yLGy9; Y2OvP: if ($id) { goto K8tYU; } goto VQA1q; DLnu9: $this->display(); goto Tc_I_; T18IZ: $this->error("\350\256\260\xe5\275\225\xe4\270\215\345\xad\230\xe5\x9c\250"); goto yPDNl; BWuKL: $this->rt = $rt; goto JS6Dq; zOKGC: $rt = M("\141\x72\x65\x61\137\x70\162\x69\x63\x65")->find($id); goto Rc2Zu; yPDNl: goto S7J_r; goto gOboy; r6ref: gBl6M: goto pshDg; yLGy9: $this->mb(); goto r32h1; JS6Dq: $this->rs = M("\x61\x72\x65\x61\137\160\x72\151\143\145")->where("\x70\137\x69\144\75\x30\40\141\x6e\144\40\x6e\163\x74\x61\x74\165\163\75\61\x20\x61\x6e\144\40\x75\x6e\151\141\143\151\144\x3d" . $this->uniacid)->order("\x6e\151\x64\40\144\145\x73\143")->select(); goto DLnu9; XuTcR: goto gBl6M; goto XKmZm; Tc_I_: S7J_r: goto r6ref; XKmZm: K8tYU: goto zOKGC; VQA1q: $this->error("\xe8\256\260\345\275\225\xe4\xb8\215\xe5\255\x98\xe5\x9c\xa8"); goto XuTcR; Rc2Zu: if ($rt) { goto fGFst; } goto T18IZ; gOboy: fGFst: goto BWuKL; r32h1: $id = I("\x6e\x69\144", 0, "\x69\x6e\164\166\141\154"); goto Y2OvP; pshDg: } public function list_modihandle() { goto kvt2k; E0q9w: $this->success("\346\223\215\344\275\234\xe6\x88\x90\345\x8a\237", U("\x6c\x69\163\x74\137\x69\156\x64\x65\170")); goto VGVjM; ZiBTq: if ($id) { goto wsJee; } goto lLmtu; w5IPh: $param["\x77\x6f\162\x64"] = strtoupper($param["\x77\x6f\162\144"]); goto dCpjF; kvt2k: $this->mb(); goto eGsLT; TDg6D: unset($param["\151\x64"]); goto w5IPh; epN3v: $id = I("\x69\x64", 0, "\151\156\x74\166\x61\154"); goto ZiBTq; dCpjF: M("\x61\162\145\x61\137\x70\162\x69\x63\145")->where("\156\x69\x64\x3d" . $id)->save($param); goto E0q9w; eGsLT: $param = I("\160\157\x73\164\56"); goto epN3v; ucBzE: goto I0ECt; goto tx6Cj; lLmtu: $this->error("\xe9\235\x9e\346\263\225\346\x93\x8d\344\275\x9c"); goto ucBzE; tx6Cj: wsJee: goto TDg6D; VGVjM: I0ECt: goto Ej7A6; Ej7A6: } public function list_status() { goto Mb1Oe; ZH11A: lDbxA: goto vQJ58; kZ6TJ: M("\x61\x72\145\141\x5f\x70\162\x69\143\145")->where("\156\151\x64\x3d" . $id)->setField("\x6e\163\164\x61\x74\x75\x73", $nstatus); goto k7zOS; GJ7H6: $this->error("\xe6\x93\215\344\xbd\x9c\345\244\xb1\xe8\xb4\245"); goto N0j66; pcJz8: if ($id) { goto cEz9U; } goto GJ7H6; k7zOS: $this->success("\xe6\x93\215\xe4\275\x9c\xe6\210\220\345\212\x9f"); goto ZH11A; sM2Yw: $nstatus = $rs["\x6e\163\164\141\x74\165\x73"] == 1 ? 2 : 1; goto kZ6TJ; nBA1Z: $rs = M("\141\x72\145\141\x5f\160\x72\151\143\145")->find($id); goto sM2Yw; kom98: $id = intval(I("\x6e\151\144")); goto pcJz8; Mb1Oe: $this->mb(); goto kom98; imbQl: cEz9U: goto nBA1Z; N0j66: goto lDbxA; goto imbQl; vQJ58: } public function list_del() { goto aOpuO; aOpuO: $this->mb(); goto EcXg0; G76il: $this->error("\xe9\x9d\x9e\346\xb3\x95\346\x93\215\xe4\275\234"); goto bIfiz; mvhtr: M("\x61\x72\145\141\x5f\160\162\x69\x63\x65")->where("\x6e\x69\x64\75" . $id)->delete(); goto vJ9vj; bIfiz: goto WO0ak; goto okd6Q; okd6Q: NZyvd: goto mvhtr; q5o7H: WO0ak: goto JTJgt; HWzdc: if ($id) { goto NZyvd; } goto G76il; EcXg0: $id = I("\x6e\x69\144", 0, "\151\x6e\164\166\x61\154"); goto HWzdc; vJ9vj: $this->success("\346\x93\215\xe4\275\234\xe6\x88\x90\xe5\x8a\237"); goto q5o7H; JTJgt: } public function list_alldel() { goto P_uGZ; EZUil: oLy56: goto Bb3wE; HDkOP: $data = array("\162\145\164\x43\157\x64\145" => "\60\60\60\60", "\162\x65\x74\104\145\163\x63" => "\xe6\x93\x8d\xe4\xbd\234\346\210\220\345\212\x9f"); goto e0CvY; Bb3wE: $str = substr(I("\141\x6c\154\x69\x64"), 0, -1); goto CH3sQ; CH3sQ: M("\x61\162\x65\x61\137\160\162\151\143\x65")->where("\40\156\151\144\40\x69\156\40\50" . $str . "\x29")->delete(); goto HDkOP; uOT3j: if (!(!IS_POST || I("\x61\x6c\x6c\x69\x64") == '')) { goto oLy56; } goto xp1Wu; xp1Wu: $data = array("\x72\x65\164\x43\x6f\x64\x65" => "\60\x30\x30\61", "\x72\x65\164\x44\145\163\143" => "\xe9\235\236\346\xb3\225\xe6\223\x8d\344\275\234"); goto tPX_Y; e0CvY: exit(json_encode($data)); goto eR1Q5; P_uGZ: $this->mb(); goto uOT3j; tPX_Y: exit(json_encode($data)); goto EZUil; eR1Q5: } public function mb() { $mb = new IndexController(); $mb->moban(); } }