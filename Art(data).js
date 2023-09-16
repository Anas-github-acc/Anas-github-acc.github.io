function partdt(artno){
   var stf_p="",stf_c="",stf_e="";
   if(artno<=4.0){
   stf_p='PART I: THE UNION AND ITS TERRITORY';
   }
   //****************************************************************************************
   else if(artno<=11.0){
   stf_p='PART II: CITIZENSHIP';
   }
   //****************************************************************************************
   else if(artno<=35.0){
   stf_p='PART III : FUNDAMENTAL RIGHTS';
   if(artno<=13.0){
   stf_e='General';
   }
   else if(artno<=18.0){
   stf_e='Right to Equality';
   }
   else if(artno<=22.0){
   stf_e='Right to Freedom';
   }
   else if(artno<=24.0){
   stf_e='Right against Exploitation';
   }
   else if(artno<=28.0){
   stf_e='Right to Freedom of Religion';
   }
   else if(artno<=31.0){
   stf_e='Cultural and Educational Rights';
   }
   else if(artno<=31.68){
   stf_e='Saving of Certain Laws';
   }
   else if(artno<=35.0){
   stf_e='Right to Constitutional Remedies';
   }
   }
   //****************************************************************************************
   else if(artno<=51.0){
   stf_p='PART IV: DIRECTIVE PRINCIPLES OF STATE POLICY';
   }
   //****************************************************************************************
   else if(artno<=51.65){
   stf_p='PART IVA: FUNDAMENTAL DUTIES';
   }
   //****************************************************************************************
   else if(artno<=151.0){
   stf_p='PART V: THE UNION';
   if(artno<=78.0){
   stf_c='CHAPTER I: THE EXECUTIVE';
   if(artno<=73.0){
   stf_e='The President and Vice-President';
   }
   else if(artno<=75.0){
   stf_e='Council of Ministers';
   }
   else if(artno<=76.0){
   stf_e='The Attorney-General for India';
   }
   else if(artno<=78.0){
   stf_e='Conduct of Government Business';
   }
   }
   else if(artno<=122.0){
   stf_c='CHAPTER II: PARLIAMENT';
   if(artno<=88.0){
   stf_e='General';
   }
   else if(artno<=98.0){
   stf_e='Officers of Parliament';
   }
   else if(artno<=100.0){
   stf_e='Conduct of Business';
   }
   else if(artno<=104.0){
   stf_e='Disqualifications of Members';
   }
   else if(artno<=106.0){
   stf_e='Powers, Privileges and Immunities of Parliament and its Members';
   }
   else if(artno<=111.0){
   stf_e='Legislative Procedure';
   }
   else if(artno<=117.0){
   stf_e='Procedure in Financial Matters';
   }
   else if(artno<=122.0){
   stf_e='Procedure Generally';
   }
   }
   else if(artno<=123.0){
   stf_c='CHAPTER III: LEGISLATIVE POWERS OF THE PRESIDENT';
   }
   else if(artno<=147.0){
   stf_c='CHAPTER IV: THE UNION JUDICIARY';
   }
   else if(artno<=151.0){
   stf_c='CHAPTER V: COMPTROLLER AND AUDITOR-GENERAL OF INDIA';
   }
   }
   //*******************************************************************************************
   else if(artno<=237.0){
   stf_p='PART VI: THE STATES';
   if(artno<=152.0){
   stf_c='CHAPTER I: GENERAL';
   }
   else if(artno<=167.0){
   stf_c='CHAPTER II: THE EXECUTIVE';
   if(artno<=162.0){
   stf_e='The Governor';
   }
   else if(artno<=164.0){
   stf_e='Council of Ministers';
   }
   else if(artno<=165.0){
   stf_e='The Advocate-General for the State';
   }
   else if(artno<=167.0){
   stf_e='Conduct of Government Business';
   }
   }
   else if(artno<=212.0){
   stf_c='CHAPTER III: THE STATE LEGISLATURE';
   if(artno<=177.0){
   stf_e='General';
   }
   else if(artno<=187.0){
   stf_e='Officers of the State Legislature';
   }
   else if(artno<=189.0){
   stf_e='Conduct of Business';
   }
   else if(artno<=193.0){
   stf_e='Disqualifications of Members';
   }
   else if(artno<=195.0){
   stf_e='Powers, privileges and immunities of State Legislatures and their Members';
   }
   else if(artno<=201.0){
   stf_e='Legislative Procedure';
   }
   else if(artno<=207.0){
   stf_e='Procedure in Financial Matters';
   }
   else if(artno<=212.0){
   stf_e='Procedure Generally';
   }
   }
   else if(artno<=213.0){
   stf_c='CHAPTER IV : LEGISLATIVE POWER OF THE GOVERNOR';
   }
   else if(artno<=231.0){
   stf_c='CHAPTER V: THE HIGH COURTS IN THE STATES';
   }
   else if(artno<=237.0){
   stf_c='CHAPTER VI : SUBORDINATE COURTS';
   }
   }
   //*****************************************************************************************
   else if(artno<=238.0){
   stf_p='PART VII: THE STATES IN PART B OF THE FIRST SCHEDULE';
   }
   //****************************************************************************************
   else if(artno<=242.0){
   stf_p='PART VIII: THE UNION TERRITORIES';
   }
   //****************************************************************************************
   else if(artno<=243.79){
   stf_p='PART IX: THE PANCHAYATS';
   }
   //****************************************************************************************
   else if(artno<=243.90){
   stf_p='PART IXA: THE MUNICIPALITIES';
   }
   //****************************************************************************************
   else if(artno<=243.90){
   stf_p='PART IXB: THE CO-OPERATIVE SOCIETIES';
   }
   //****************************************************************************************
   else if(artno<=244.65){
   stf_p='PART X: THE SCHEDULED AND TRIBAL AREAS';
   }
   //****************************************************************************************
   else if(artno<=263.0){
   stf_p='PART XI: RELATIONS BETWEEN THE UNION AND THE STATES';
   if(artno<=255.0){
   stf_c='CHAPTER I: LEGISLATIVE RELATIONS';
   if(artno<=255.0){
   stf_e='Distribution of Legislative Powers';
   }
   }
   else if(artno<=263.0){
   stf_c='CHAPTER II : ADMINISTRATIVE RELATIONS';
   if(artno<=261.0){
   stf_e='General';
   }
   else if(artno<=262.0){
   stf_e='Disputes relating to Waters';
   }
   else if(artno<=263.0){
   stf_e='Co-ordination between States';
   }
   }
   }
   //****************************************************************************************
   else if(artno<=300.65){
   stf_p='PART XII: FINANCE, PROPERTY, CONTRACTS AND SUITS';
   if(artno<=291.0){
   stf_c='CHAPTER I: FINANCE';
   if(artno<=267.0){
   stf_e='General';
   }
   else if(artno<=281.0){
   stf_e='Distribution of Revenues between the Union and the States';
   }
   
   if(artno<=291.0){
   stf_e='Miscellaneous financial provisions';
   }
   }
   else if(artno<=293.0){
   stf_c='CHAPTER II: BORROWING';
   }
   else if(artno<=300.0){
   stf_c='CHAPTER III: PROPERTY, CONTRACTS, RIGHTS, LIABILITIES, OBLIGATIONS AND SUITS';
   }
   else if(artno<=300.65){
   stf_c='CHAPTER IV: RIGHT TO PROPERTY';
   }
   }
   //****************************************************************************************
   else if(artno<=307.0){
   stf_p='PART XIII: TRADE, COMMERCE AND INTERCOURSE WITHIN THE TERRITORY OF INDIA';
   }
   //****************************************************************************************
   else if(artno<=323.0){
   stf_p='PART XIV: SERVICES UNDER THE UNION AND THE STATES';
   if(artno<=314.0){
   stf_c='CHAPTER I: SERVICES';
   }
   else if(artno<=323.0){
   stf_c='CHAPTER II: PUBLIC SERVICE COMMISSIONS';
   }
   }
   //****************************************************************************************
   else if(artno<=323.66){
   stf_p='PART XIVA: TRIBUNALS';
   }
   //****************************************************************************************
   else if(artno<=329.65){
   stf_p='PART XV: ELECTIONS';
   }
   //****************************************************************************************
   else if(artno<=342.65){
   stf_p='PART XVI: SPECIAL PROVISIONS RELATING TO CERTAIN CLASSES';
   }
   //****************************************************************************************
   else if(artno<=351.0){
   stf_p='PART XVII: OFFICIAL LANGUAGE';
   if(artno<=344.0){
   stf_c='CHAPTER I: LANGUAGE OF THE UNION';
   }
   else if(artno<=347.0){
   stf_c='CHAPTER II: REGIONAL LANGUAGES';
   }
   else if(artno<=349.0){
   stf_c='CHAPTER III: LANGUAGE OF THE SUPREME COURT, HIGH COURTS, ETC.';
   }
   else if(artno<=351.0){
   stf_c='CHAPTER IV: SPECIAL DIRECTIVES';
   }
   }
   //****************************************************************************************
   else if(artno<=360.0){
   stf_p='PART XVIII: EMERGENCY PROVISIONS';
   }
   //****************************************************************************************
   else if(artno<=367.0){
   stf_p='PART XIX: MISCELLANEOUS';
   }
   //****************************************************************************************
   else if(artno<=368.0){
   stf_p='PART XX: AMENDMENT OF THE CONSTITUTION';
   }
   //****************************************************************************************
   else if(artno<=392.0){
   stf_p='PART XXI: TEMPORARY, TRANSITIONAL AND SPECIAL PROVISIONS';
   }
   else{
   stf_p='PART XXII: SHORT TITLE, COMMENCEMENT, AUTHORITATIVE TEXT IN HINDI AND REPEALS';
   }
   //****************************************************************************************
   
   return [stf_p,stf_c,stf_e];
}
function Artdata(Blank){
var art1 = "Article1: Name and territory of the Union.";
var art2 = "Article2: Admission or establishment of new States.";
var art2A = "Article2A: [Repealed.]";
var art3 = "Article3: Formation of new States and alteration of areas, boundaries or names of existing States.";
var art4 = "Article4: Laws made under articles 2 and 3 to provide for the amendment of the First and the Fourth Schedules and supplemental, incidental and consequential matters.";
var art5 = "Article5: Citizenship at the commencement of the Constitution.";
var art6 = "Article6: Rights of citizenship of certain persons who have migrated to India from Pakistan.";
var art7 = "Article7: Rights of citizenship of certain migrants to Pakistan.";
var art8 = "Article8: Rights of citizenship of certain persons of Indian origin residing outside India.";
var art9 = "Article9: Persons voluntarily acquiring citizenship of a foreign State not to be citizens.";
var art10 = "Article10: Continuance of the rights of citizenship.";
var art11 = "Article11: Parliament to regulate the right of citizenship by law.";
var art12 = "Article12: Definition.";
var art13 = "Article13: Laws inconsistent with or in derogation of the fundamental rights.";
var art14 = "Article14: Equality before law.";
var art15 = "Article15: Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth.";
var art16 = "Article16: Equality of opportunity in matters of public employment.";
var art17 = "Article17: Abolition of Untouchability.";
var art18 = "Article18: Abolition of titles.";
var art19 = "Article19: Protection of certain rights regarding freedom of speech, etc.";
var art20 = "Article20: Protection in respect of conviction for offences.";
var art21 = "Article21: Protection of life and personal liberty.";
var art21A = "Article21A: Right to educatio.";
var art22 = "Article22: Protection against arrest and detention in certain cases.";
var art23 = "Article23: Prohibition of traffic in human beings and forced labour.";
var art24 = "Article24: Prohibition of employment of children in factories, etc.";
var art25 = "Article25: Freedom of conscience and free profession, practice and propagation of religion.";
var art26 = "Article26: Freedom to manage religious affairs.";
var art27 = "Article27: Freedom as to payment of taxes for promotion of any particular religion.";
var art28 = "Article28: Freedom as to attendance at religious instruction or religious worship in certain educational institutions.";
var art29 = "Article29: Protection of interests of minorities.";
var art30 = "Article30: Right of minorities to establish and administer educational institutions.";
var art31 = "Article31: [Repealed.]";
var art31A = "Article31A: Saving of Laws providing for the acquisition of estates, etc.";
var art31B = "Article31B: Validation of certain Acts and Regulations.";
var art31C = "Article31C: Saving of laws giving effect to certain directive principles.";
var art31D = "Article31D: [Repealed.]";
var art32 = "Article32: Remedies for enforcement of rights conferred by this Part.";
var art32A = "Article32A: [Repealed.]";
var art33 = "Article33: Power of Parliament to modify the rights conferred by this Part in their application to Forces, etc.";
var art34 = "Article34: Restriction on rights conferred by this Part while martial law is in force in any area.";
var art35 = "Article35: Legislation to give effect to the provisions of this Part.";
var art36 = "Article36: Definition.";
var art37 = "Article37: Application of the principles contained in this Part.";
var art38 = "Article38: State to secure a social order for the promotion of the welfare of the people.";
var art39 = "Article39: Certain principles of policy to be followed by the State.";
var art39A = "Article39A: Equal justice and free legal aid.";
var art40 = "Article40: The organisation of village panchayats.";
var art41 = "Article41: Right to work, to education and to public assistance in certain cases.";
var art42 = "Article42: Provision for just and humane conditions of work and maternity relief.";
var art43 = "Article43: Living wage, etc., for workers.";
var art43A = "Article43A: Participation of workers in the management of industries.";
var art43B = "Article43B: Promotion of co-operative societies.";
var art44 = "Article44: Uniform civil code for the citizens.";
var art45 = "Article45: Provision for free and compulsory education for children.";
var art46 = "Article46: Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections.";
var art47 = "Article47: Duty of the State to raise the level of nutrition and the standard of living and to improve public health.";
var art48 = "Article48: The organisation of agriculture and animal husbandry.";
var art48A = "Article48A: Protection and improvement of environment and safeguarding of forests and wildlife.";
var art49 = "Article49: Protection of monuments and places and objects of national importance.";
var art50 = "Article50: Separation of judiciary from the executive.";
var art51 = "Article51: Promotion of international peace and security.";
var art51A = "Article51A: Fundamental duties.";
var art52 = "Article52: The President of India.";
var art53 = "Article53: The executive power of the Union.";
var art54 = "Article54: Election of President.";
var art55 = "Article55: Manner of election of President.";
var art56 = "Article56: Term of office of President.";
var art57 = "Article57: Eligibility for re-election.";
var art58 = "Article58: Qualifications for election as President.";
var art59 = "Article59: Conditions of the President�s office.";
var art60 = "Article60: Oath or affirmation by the President.";
var art61 = "Article61: Procedure for impeachment of the President.";
var art62 = "Article62: Time of holding the election to fill the vacancy in the office of President and the term of office of person elected to fill the casual vacancy.";
var art63 = "Article63: The Vice-President of India.";
var art64 = "Article64: The Vice-President to be ex officio Chairman of the Council of States.";
var art65 = "Article65: The Vice-President to act as President or to discharge his functions during casual vacancies in the office, or during the absence, of President.";
var art66 = "Article66: Election of Vice-President.";
var art67 = "Article67: Term of office of Vice-President.";
var art68 = "Article68: Time of holding the election to fill the vacancy in the office of Vice-President and the term of office of person elected to fill the casual vacancy.";
var art69 = "Article69: Oath or affirmation by the Vice-President.";
var art70 = "Article70: Discharge of President�s functions in other contingencies.";
var art71 = "Article71: Matters relating to, or connected with, the election of a President or Vice-President.";
var art72 = "Article72: Power of President to grant pardons, etc., and to suspend, remit or commute sentences in certain cases.";
var art73 = "Article73: The extent of executive power of the Union.";
var art74 = "Article74: Council of Ministers to aid and advise the President.";
var art75 = "Article75: Other provisions as to Ministers.";
var art76 = "Article76: Attorney-General for India.";
var art77 = "Article77: Conduct of business of the Government of India.";
var art78 = "Article78: Duties of Prime Minister as respects the furnishing of information to the President, etc.";
var art79 = "Article79: Constitution of Parliament.";
var art80 = "Article80: Composition of the Council of States.";
var art81 = "Article81: Composition of the House of the People.";
var art82 = "Article82: Readjustment after each census.";
var art83 = "Article83: Duration of Houses of Parliament.";
var art84 = "Article84: Qualification for membership of Parliament.";
var art85 = "Article85: Sessions of Parliament, prorogation and dissolution.";
var art86 = "Article86: Right of President to address and send messages to Houses.";
var art87 = "Article87: Special address by the President.";
var art88 = "Article88: Rights of Ministers and Attorney-General as respects Houses.";
var art89 = "Article89: The Chairman and Deputy Chairman of the Council of States.";
var art90 = "Article90: Vacation and resignation of, and removal from, the office of Deputy Chairman.";
var art91 = "Article91: Power of the Deputy Chairman or other person to perform the duties of the office of, or to act as, Chairman.";
var art92 = "Article92: The Chairman or the Deputy Chairman not to preside while a resolution for his removal from office is under consideration.";
var art93 = "Article93: The Speaker and Deputy Speaker of the House of the People.";
var art94 = "Article94: Vacation and resignation of, and removal from, the offices of Speaker and Deputy Speaker.";
var art95 = "Article95: Power of the Deputy Speaker or other person to perform the duties of the office of, or to act as, Speaker.";
var art96 = "Article96: The Speaker or the Deputy Speaker not to preside while a resolution for his removal from office is under consideration.";
var art97 = "Article97: Salaries and allowances of the Chairman and Deputy Chairman and the Speaker and Deputy Speaker.";
var art98 = "Article98: Secretariat of Parliament.";
var art99 = "Article99: Oath or affirmation by members.";
var art100 = "Article100: Voting in Houses, power of Houses to act notwithstanding vacancies and quorum.";
var art101 = "Article101: Vacation of seats.";
var art102 = "Article102: Disqualifications for membership.";
var art103 = "Article103: Decision on questions as to disqualifications of members.";
var art104 = "Article104: Penalty for sitting and voting before making oath or affirmation under article 99 or when not qualified or when disqualified.";
var art105 = "Article105: Powers, privileges, etc., of the Houses of Parliament and of the members and committees thereof.";
var art106 = "Article106: Salaries and allowances of members.";
var art107 = "Article107: Provisions as to introduction and passing of Bills.";
var art108 = "Article108: Joint sitting of both Houses in certain cases.";
var art109 = "Article109: Special procedure in respect of Money Bills.";
var art110 = "Article110: Definition of �Money Bills�.";
var art111 = "Article111: Assent to Bills.";
var art112 = "Article112: Annual financial statement.";
var art113 = "Article113: Procedure in Parliament with respect to estimates.";
var art114 = "Article114: Appropriation Bills.";
var art115 = "Article115: Supplementary, additional or excess grants.";
var art116 = "Article116: Votes on account, votes of credit and exceptional grants.";
var art117 = "Article117: Special provisions as to financial Bills.";
var art118 = "Article118: Rules of procedure.";
var art119 = "Article119: Regulation by law of procedure in Parliament in relation to financial business.";
var art120 = "Article120: Language to be used in Parliament.";
var art121 = "Article121: Restriction on discussion in Parliament.";
var art122 = "Article122: Courts not to inquire into proceedings of Parliament.";
var art123 = "Article123: Power of President to promulgate Ordinances during recess of Parliament.";
var art124 = "Article124: Establishment and constitution of Supreme Court.";
var art124A = "Article124A: National Judicial Appointments Commission. (Declared unconstitutional by the Supreme Court, however not repealed by the Parliament.";
var art124B = "Article124B: Functions of Commission.";
var art124C = "Article124C: Power of Parliament to make law.";
var art125 = "Article125: Salaries, etc., of Judges.";
var art126 = "Article126: Appointment of acting Chief Justice.";
var art127 = "Article127: Appointment of ad hoc judges.";
var art128 = "Article128: Attendance of retired Judges at sittings of the Supreme Court.";
var art129 = "Article129: Supreme Court to be a court of record.";
var art130 = "Article130: Seat of Supreme Court.";
var art131 = "Article131: Original jurisdiction of the Supreme Court.";
var art131A = "Article131A: [Repealed.]";
var art132 = "Article132: Appellate jurisdiction of Supreme Court in appeals from High Courts in certain cases.";
var art133 = "Article133: Appellate jurisdiction of Supreme Court in appeals from High Courts in regard to Civil matters.";
var art134 = "Article134: Appellate jurisdiction of Supreme Court in regard to criminal matters.";
var art134A = "Article134A: Certificate for appeal to the Supreme Court.";
var art135 = "Article135: Jurisdiction and powers of the Federal Court under existing law to be exercisable by the Supreme Court.";
var art136 = "Article136: Special leave to appeal by the Supreme Court.";
var art137 = "Article137: Review of judgments or orders by the Supreme Court.";
var art138 = "Article138: Enlargement of the jurisdiction of the Supreme Court.";
var art139 = "Article139: Conferment on the Supreme Court of powers to issue certain writs.";
var art139A = "Article139A: Transfer of certain cases.";
var art140 = "Article140: Ancillary powers of Supreme Court.";
var art141 = "Article141: Law declared by Supreme Court to be binding on all courts.";
var art142 = "Article142: Enforcement of decrees and orders of Supreme Court and orders as to discovery, etc.";
var art143 = "Article143: Power of President to consult Supreme Court.";
var art144 = "Article144: Civil and judicial authorities to act in aid of the Supreme Court.";
var art144A = "Article144A: [Repealed.]";
var art145 = "Article145: Rules of Court, etc.";
var art146 = "Article146: Officers and servants and the expenses of the Supreme Court.";
var art147 = "Article147: Interpretation.";
var art148 = "Article148: Comptroller and Auditor-General of India.";
var art149 = "Article149: Duties and powers of the Comptroller and Auditor-General.";
var art150 = "Article150: Form of accounts of the Union and of the States.";
var art151 = "Article151: Audit reports.";
var art152 = "Article152: Definition.";
var art153 = "Article153: Governors of States.";
var art154 = "Article154: Executive power of State.";
var art155 = "Article155: Appointment of Governor.";
var art156 = "Article156: Term of office of Governor.";
var art157 = "Article157: Qualifications for appointment as Governor.";
var art158 = "Article158: Conditions of Governor�s offic.";
var art159 = "Article159: Oath or affirmation by the Governor.";
var art160 = "Article160: Discharge of the functions of the Governor in certain contingencies.";
var art161 = "Article161: Power of Governor to grant pardons, etc., and to suspend, remit or commute sentences in certain cases.";
var art162 = "Article162: Extent of executive power of State.";
var art163 = "Article163: Council of Ministers to aid and advise Governor.";
var art164 = "Article164: Other provisions as to Ministers.";
var art165 = "Article165: Advocate-General for the State.";
var art166 = "Article166: Conduct of business of the Government of a State.";
var art167 = "Article167: Duties of Chief Minister as respects the furnishing of information to Governor, etc.";
var art168 = "Article168: Constitution of Legislatures in States.";
var art169 = "Article169: Abolition or creation of Legislative Councils in States.";
var art170 = "Article170: Composition of the Legislative Assemblies.";
var art171 = "Article171: Composition of the Legislative Councils.";
var art172 = "Article172: Duration of State Legislatures.";
var art173 = "Article173: Qualification for membership of the State Legislature.";
var art174 = "Article174: Sessions of the State Legislature, prorogation and dissolution.";
var art175 = "Article175: Right of Governor to address and send messages to the House or Houses.";
var art176 = "Article176: Special address by the Governor.";
var art177 = "Article177: Rights of Ministers and Advocate-General as respects the Houses.";
var art178 = "Article178: The Speaker and Deputy Speaker of the Legislative Assembly.";
var art179 = "Article179: Vacation and resignation of, and removal from, the offices of Speaker and Deputy Speaker.";
var art180 = "Article180: Power of the Deputy Speaker or other person to perform the duties of the office of, or to act as, Speaker.";
var art181 = "Article181: The Speaker or the Deputy Speaker not to preside while a resolution for his removal from office is under consideration.";
var art182 = "Article182: The Chairman and Deputy Chairman of the Legislative Council.";
var art183 = "Article183: Vacation and resignation of, and removal from, the offices of Chairman and Deputy Chairman.";
var art184 = "Article184: Power of the Deputy Chairman or other person to perform the duties of the office of, or to act as, Chairman.";
var art185 = "Article185: The Chairman or the Deputy Chairman not to preside while a resolution for his removal from office is under consideration.";
var art186 = "Article186: Salaries and allowances of the Speaker and Deputy Speaker and the Chairman and Deputy Chairman.";
var art187 = "Article187: Secretariat of State Legislature.";
var art188 = "Article188: Oath or affirmation by members.";
var art189 = "Article189: Voting in Houses, power of Houses to act notwithstanding vacancies and quorum.";
var art190 = "Article190: Vacation of seats.";
var art191 = "Article191: Disqualifications for membership.";
var art192 = "Article192: Decision on questions as to disqualifications of members.";
var art193 = "Article193: Penalty for sitting and voting before making oath or affirmation under article 188 or when not qualified or when disqualified.";
var art194 = "Article194: Powers, privileges, etc., of the Houses of Legislatures and of the members and committees thereof.";
var art195 = "Article195: Salaries and allowances of members.";
var art196 = "Article196: Provisions as to introduction and passing of Bills.";
var art197 = "Article197: Restriction on powers of Legislative Council as to Bills other than Money Bills.";
var art198 = "Article198: Special procedure in respect of Money Bills.";
var art199 = "Article199: Definition of �Money Bills�.";
var art200 = "Article200: Assent to Bills.";
var art201 = "Article201: Bills reserved for consideration.";
var art202 = "Article202: Annual financial statement.";
var art203 = "Article203: Procedure in Legislature with respect to estimates.";
var art204 = "Article204: Appropriation Bills.";
var art205 = "Article205: Supplementary, additional or excess grants.";
var art206 = "Article206: Votes on account, votes of credit and exceptional grants.";
var art207 = "Article207: Special provisions as to financial Bills.";
var art208 = "Article208: Rules of procedure.";
var art209 = "Article209: Regulation by law of procedure in the Legislature of the State in relation to financial business.";
var art210 = "Article210: Language to be used in the Legislature.";
var art211 = "Article211: Restriction on discussion in the Legislature.";
var art212 = "Article212: Courts not to inquire into proceedings of the Legislature.";
var art213 = "Article213: Power of Governor to promulgate Ordinances during recess of Legislature.";
var art214 = "Article214: High Courts for States.";
var art215 = "Article215: High Courts to be courts of record.";
var art216 = "Article216: Constitution of High Courts.";
var art217 = "Article217: Appointment and conditions of the office of a Judge of a High Court.";
var art218 = "Article218: Application of certain provisions relating to Supreme Court to High Courts.";
var art219 = "Article219: Oath or affirmation by Judges of High Courts.";
var art220 = "Article220: Restriction on practice after being a permanent Judge.";
var art221 = "Article221: Salaries, etc., of Judges.";
var art222 = "Article222: Transfer of a Judge from one High Court to another.";
var art223 = "Article223: Appointment of acting Chief Justice.";
var art224 = "Article224: Appointment of additional and acting Judges.";
var art224A = "Article224A: Appointment of retired Judges at sittings of High Courts.";
var art225 = "Article225: Jurisdiction of existing High Courts.";
var art226 = "Article226: Power of High Courts to issue certain writs.";
var art226A = "Article226A: [Repealed.]";
var art227 = "Article227: Power of superintendence over all courts by the High Court.";
var art228 = "Article228: Transfer of certain cases to High Court.";
var art228A = "Article228A: [Repealed.]";
var art229 = "Article229: Officers and servants and the expenses of High Courts.";
var art230 = "Article230: Extension of jurisdiction of High Courts to Union territories.";
var art231 = "Article231: Establishment of a common High Court for two or more States.";
var art233 = "Article233: Appointment of district judges.";
var art233A = "Article233A: Validation of appointments of, and judgments, etc., delivered by, certain district judges.";
var art234 = "Article234: Recruitment of persons other than district judges to the judicial service.";
var art235 = "Article235: Control over subordinate courts.";
var art236 = "Article236: Interpretation.";
var art237 = "Article237: Application of the provisions of this Chapter to certain class or classes of magistrates.";
var art238 = "Article238: [Repealed.]";
var art239 = "Article239: Administration of Union territories.";
var art239A = "Article239A: Creation of local Legislatures or Council of Ministers or both for certain Union territories.";
var art239AA = "Article239AA: Special provisions with respect to Delhi.";
var art239AB = "Article239AB: Provision in case of failure of constitutional machinery.";
var art239B = "Article239B: Power of the administrator to promulgate Ordinances during recess of Legislature.";
var art240 = "Article240: Power of President to make regulations for certain Union territories.";
var art241 = "Article241: High Courts for Union territories.";
var art242 = "Article242: [Repealed.]";
var art243 = "Article243: Definitions.";
var art243A = "Article243A: Gram Sabha.";
var art243B = "Article243B: Constitution of Panchayats.";
var art243C = "Article243C: Composition of Panchayats.";
var art243D = "Article243D: Reservation of seats.";
var art243E = "Article243E: Duration of Panchayats, etc.";
var art243F = "Article243F: Disqualifications for membership.";
var art243G = "Article243G: Powers, authority and responsibilities of Panchayats.";
var art243H = "Article243H: Powers to impose taxes by, and Funds of, the Panchayats.";
var art243I = "Article243-I: Constitution of Finance Commission to review financial position.";
var art243J = "Article243J: Audit of accounts of Panchayats.";
var art243K = "Article243K: Elections to the Panchayats.";
var art243L = "Article243L: Application to Union territories.";
var art243M = "Article243M: Part not to apply to certain areas.";
var art243N = "Article243N: Continuance of existing laws and Panchayats.";
var art243O = "Article243-O: Bar to interference by courts in electoral matters.";
var art243P = "Article243P: Definitions.";
var art243Q = "Article243Q: Constitution of Municipalities.";
var art243R = "Article243R: Composition of Municipalities.";
var art243S = "Article243S: Constitution and composition of Wards Committees, etc.";
var art243T = "Article243T: Reservation of seats.";
var art243U = "Article243U: Duration of Municipalities, etc.";
var art243V = "Article243V: Disqualifications for membership.";
var art243W = "Article243W: Powers, authority and responsibilities of Municipalities, etc.";
var art243X = "Article243X.: Power to impose taxes by, and Funds of, the Municipalities.";
var art243Y = "Article243: Finance Commission.";
var art243Z = "Article243Z: Audit of accounts of Municipalities.";
var art243ZA = "Article243ZA: Elections to the Municipalities.";
var art243ZB = "Article243ZB: Application to Union territories.";
var art243ZC = "Article243ZC: Part not to apply to certain areas.";
var art243ZD = "Article243ZD: Committee for district planning.";
var art243ZE = "Article243ZE: Committee for Metropolitan planning.";
var art243ZF = "Article243ZF: Continuance of existing laws and Municipalities.";
var art243ZG = "Article243ZG: Bar to interference by Courts in electoral matters.";
var art243ZH = "Article243ZH: Definition.";
var art243ZI = "Article243ZI: Incorporation of co-operative societie.";
var art243ZJ = "Article243ZJ: Number and term of members of the board and its office bearers.";
var art243ZK = "Article243: ZK Election of members of board.";
var art243ZL = "Article243ZL: Supersession and suspension of the board and interim management.";
var art243ZM = "Article243ZM: Audit of accounts of co-operative societies.";
var art243ZN = "Article243ZN: Convening of general body meetings.";
var art243ZO = "Article243ZO: Right of a member to get information.";
var art243ZP = "Article243ZP: Returns.";
var art243ZQ = "Article243ZQ: Offences and penalties.";
var art243ZR = "Article243ZR: Application to multi-state co-operative societies.";
var art243ZS = "Article243ZS: Application to Union Territories.";
var art243ZT = "Article243ZT: Continuance of existing laws.";
var art244 = "Article244: Administration of Scheduled Areas and Tribal Areas.";
var art244A = "Article244A: Formation of an autonomous State comprising certain tribal areas in Assam and creation of local Legislature or Council of Ministers or both therefor.";
var art245 = "Article245: Extent of laws made by Parliament and by the Legislatures of States.";
var art246 = "Article246: Subject-matter of laws made by Parliament and by the Legislatures of States.";
var art246A = "Article246A: Special provision with respect to goods and services tax.";
var art247 = "Article247: Power of Parliament to provide for the establishment of certain additional courts.";
var art248 = "Article248: Residuary powers of legislation.";
var art249 = "Article249: Power of Parliament to legislate with respect to a matter in the State List in the national interest.";
var art250 = "Article250: Power of Parliament to legislate with respect to any matter in the State List if a Proclamation of Emergency is in operation.";
var art251 = "Article251: Inconsistency between laws made by Parliament under articles 249 and 250 and laws made by the Legislatures of States.";
var art252 = "Article252: Power of Parliament to legislate for two or more States by consent and adoption of such legislation by any other State.";
var art253 = "Article253: Legislation for giving effect to international agreements.";
var art254 = "Article254: Inconsistency between laws made by Parliament and laws made by the Legislatures of States.";
var art255 = "Article255: Requirements as to recommendations and previous sanctions to be regarded as matters of procedure only.";
var art256 = "Article256: Obligation of States and the Union.";
var art257 = "Article257: Control of the Union over States in certain cases.";
var art257A = "Article257A: [Repealed.]";
var art258 = "Article258: Power of the Union to confer powers, etc., on States in certain cases.";
var art258A = "Article258A: Power of the States to entrust functions to the Union.";
var art259 = "Article259: [Repealed.]";
var art260 = "Article260: Jurisdiction of the Union in relation to territories outside India.";
var art261 = "Article261: Public acts, records and judicial proceedings.";
var art262 = "Article262: Adjudication of disputes relating to waters of inter-State rivers or river valleys.";
var art263 = "Article263: Provisions with respect to an inter-State Council.";
var art264 = "Article264: Interpretation.";
var art265 = "Article265: Taxes not to be imposed save by authority of law.";
var art266 = "Article266: Consolidated Funds and public accounts of India and of the States.";
var art267 = "Article267: Contingency Fund.";
var art268 = "Article268: Duties levied by the Union but collected and appropriated by the State.";
var art268A = "Article268A: [Repealed.]";
var art269 = "Article269: Taxes levied and collected by the Union but assigned to the States.";
var art269A = "Article269A: Levy and collection of goods and services tax in the course of inter-state trade or commerce.";
var art270 = "Article270: Taxes levied and distributed between the Union and the States.";
var art271 = "Article271: Surcharge on certain duties and taxes for purposes of the Union.";
var art272 = "Article272: [Repealed.]";
var art273 = "Article273: Grants in lieu of export duty on jute and jute products.";
var art274 = "Article274: Prior recommendation of President required to Bills affecting taxation in which States are interested.";
var art275 = "Article275: Grants from the Union to certain States.";
var art276 = "Article276: Taxes on professions, trades, callings and employments.";
var art277 = "Article277: Savings.";
var art278 = "Article278: [Repealed.]";
var art279 = "Article279: Calculation of �net proceeds�, etc.";
var art279A = "Article279A: Goods and Services Tax Council.";
var art280 = "Article280: Finance Commission.";
var art281 = "Article281: Recommendations of the Finance Commission.";
var art282 = "Article282: Expenditure defrayable by the Union or a State out of its revenues.";
var art283 = "Article283: Custody, etc., of Consolidated Funds, Contingency Funds and moneys credited to the public accounts.";
var art284 = "Article284: Custody of suitors� deposits and other moneys received by public servants and courts.";
var art285 = "Article285: Exemption of property of the Union from State taxation.";
var art286 = "Article286: Restrictions as to imposition of tax on the sale or purchase of goods.";
var art287 = "Article287: Exemption from taxes on electricity.";
var art288 = "Article288: Exemption from taxation by States in respect of water or electricity in certain cases.";
var art289 = "Article289: Exemption of property and income of a State from Union taxation.";
var art290 = "Article290: Adjustment in respect of certain expenses and pensions.";
var art290A = "Article290A: Annual payment to certain Devaswom Funds.";
var art291 = "Article291: [Repealed.]";
var art292 = "Article292: Borrowing by the Government of India.";
var art293 = "Article293: Borrowing by States.";
var art294 = "Article294: Succession to property, assets, rights, liabilities and obligations in certain cases.";
var art295 = "Article295: Succession to property, assets, rights, liabilities and obligations in other cases.";
var art296 = "Article296: Property accruing by escheat or laps or as bona vacantia.";
var art297 = "Article297: Things of value within territorial waters or continental shelf and resources of the exclusive economic zone to vest in the Union.";
var art298 = "Article298: Power to carry on trade, etc.";
var art299 = "Article299: Contracts.";
var art300 = "Article300: Suits and proceedings.";
var art300A = "Article300A: Persons not to be deprived of property save by authority of law.";
var art301 = "Article301: Freedom of trade, commerce and intercourse.";
var art302 = "Article302: Power of Parliament to impose restrictions on trade, commerce and intercourse.";
var art303 = "Article303: Restrictions on the legislative powers of the Union and of the States with regard to trade and commerce.";
var art304 = "Article304: Restrictions on trade, commerce and intercourse among States.";
var art305 = "Article305: Saving of existing laws and laws providing for State monopolies.";
var art306 = "Article306: [Repealed.]";
var art307 = "Article307: Appointment of authority for carrying out the purposes of articles 301 to 304.";
var art308 = "Article308: Interpretation.";
var art309 = "Article309: Recruitment and conditions of service of persons serving the Union or a State.";
var art310 = "Article310: Tenure of office of persons serving the Union or a State.";
var art311 = "Article311: Dismissal, removal or reduction in rank of persons employed in civil capacities under the Union or a State.";
var art312 = "Article312: All-India services.";
var art312A = "Article312A: Power of Parliament to vary or revoke conditions of service of officers of certain services.";
var art313 = "Article313: Transitional provisions.";
var art314 = "Article314: [Repeated.]";
var art315 = "Article315: Public Service Commissions for the Union and for the States.";
var art316 = "Article316: Appointment and term of office of members.";
var art317 = "Article317: Removal and suspension of a member of a Public Service Commission.";
var art318 = "Article318: Power to make regulations as to conditions of service of members and staff of the Commission.";
var art319 = "Article319: Prohibition as to the holding of offices by members of Commission on ceasing to be such members.";
var art320 = "Article320: Functions of Public Service Commissions.";
var art321 = "Article321: Power to extend functions of Public Service Commissions.";
var art322 = "Article322: Expenses of Public Service Commissions.";
var art323 = "Article323: Reports of Public Service Commissions.";
var art323A = "Article323A: Administrative tribunals.";
var art323B = "Article323B: Tribunals for other matters.";
var art324 = "Article324: Superintendence, direction and control of elections to be vested in an Election Commission.";
var art325 = "Article325: No person to be ineligible for inclusion in, or to claim to be included in a special, electoral roll on grounds of religion, race, caste or sex.";
var art326 = "Article326: Elections to the House of the People and to the Legislative Assemblies of States to be on the basis of adult suffrage.";
var art327 = "Article327: Power of Parliament to make provision with respect to elections to Legislatures.";
var art328 = "Article328: Power of Legislature of a State to make provision with respect to elections to such Legislature.";
var art329 = "Article329: Bar to interference by courts in electoral matters.";
var art329A = "Article329A: [Repealed.]";
var art330 = "Article330: Reservation of seats for Scheduled Castes and Scheduled Tribes in the House of the People.";
var art331 = "Article331: Representation of the Anglo-Indian community in the House of the People.";
var art332 = "Article332: Reservation of seats for Scheduled Castes and Scheduled Tribes in the Legislative Assemblies of the States.";
var art333 = "Article333: Representation of the Anglo-Indian community in the Legislative Assemblies of the States.";
var art334 = "Article334: Reservation of seats and special representation to cease after sixty years.";
var art335 = "Article335: Claims of Scheduled Castes and Scheduled Tribes to services and posts.";
var art336 = "Article336: Special provision for Anglo-Indian community in certain services.";
var art337 = "Article337: Special provision with respect to educational grants for the benefit of the Anglo-Indian Community.";
var art338 = "Article338: National Commission for Scheduled Castes.";
var art338A = "Article338A: National Commission for Scheduled Tribes.";
var art338B = "Article338A: National Commission for Backward Classes.";
var art339 = "Article339: Control of the Union over the Administration of Scheduled Areas and the welfare of Scheduled Tribes.";
var art340 = "Article340: Appointment of a Commission to investigate the conditions of backward classes.";
var art341 = "Article341: Scheduled Castes.";
var art342 = "Article342: Scheduled Tribes.";
var art342A = "Article342A: Socially and educationally backward classes.";
var art343 = "Article343: Official language of the Union.";
var art344 = "Article344: Commission and Committee of Parliament on official language.";
var art345 = "Article345: Official language or languages of a State.";
var art346 = "Article346: Official language for communication between one State and another or between a State and the Union.";
var art347 = "Article347: Special provision relating to language spoken by a section of the population of a State.";
var art348 = "Article348: Language to be used in the Supreme Court and in the High Courts and for Acts, Bills, etc.";
var art349 = "Article349: Special procedure for enactment of certain laws relating to language.";
var art350 = "Article350: Language to be used in representations for redress of grievances.";
var art350A = "Article350A: Facilities for instruction in mother-tongue at the primary stage.";
var art350B = "Article350B: Special Officer for linguistic minorities.";
var art351 = "Article351: Directive for development of the Hindi language.";
var art352 = "Article352: Proclamation of Emergency.";
var art353 = "Article353: Effect of Proclamation of Emergency.";
var art354 = "Article354: Application of provisions relating to distribution of revenues while a Proclamation of Emergency is in operation.";
var art355 = "Article355: Duty of the Union to protect States against external aggression and internal disturbance.";
var art356 = "Article356: Provisions in case of failure of constitutional machinery in States.";
var art357 = "Article357: Exercise of legislative powers under Proclamation issued under article 356.";
var art358 = "Article358: Suspension of provisions of article 19 during emergencies.";
var art359 = "Article359: Suspension of the enforcement of the rights conferred by Part III during emergencies.";
var art359A = "Article359A: [Repealed.]";
var art360 = "Article360: Provisions as to financial emergency.";
var art361 = "Article361: Protection of President and Governors and Rajprakukhs.";
var art361A = "Article361A: Protection of publication of proceedings of Parliament and State Legislatures.";
var art361B = "Article361B: Disqualification for appointment on remunerative political post.";
var art362 = "Article362: [Repealed.]";
var art363 = "Article363: Bar to interference by courts in disputes arising out of certain treaties, agreements, etc.";
var art363A = "Article363A: Recognition granted to Rulers of Indian States to cease and privy purses to be abolished.";
var art364 = "Article364: Special provisions as to major ports and aerodromes.";
var art365 = "Article365: Effect of failure to comply with, or to give effect to, directions given by the Union.";
var art366 = "Article366: Definitions.";
var art367 = "Article367: Interpretation.";
var art368 = "Article368: Power of Parliament to amend the Constitution and procedure therefor.";
var art369 = "Article369: Temporary power to Parliament to make laws with respect to certain matters in the State List as if they were matters in the Concurrent List.";
var art370 = "Article370: Temporary provisions with respect to the State of Jammu and Kashmir.";
var art371 = "Article371: Special provision with respect to the States of Maharashtra and Gujarat.";
var art371A = "Article371A: Special provision with respect to the State of Nagaland.";
var art371B = "Article371B: Special provision with respect to the State of Assam.";
var art371C = "Article371C: Special provision with respect to the State of Manipur.";
var art371D = "Article371D: Special provisions with respect to the State of Andhra Pradesh.";
var art371E = "Article371E: Establishment of Central University in Andhra Pradesh.";
var art371F = "Article371F: Special provisions with respect to the State of Sikkim.";
var art371G = "Article371G: Special provision with respect to the State of Mizoram.";
var art371H = "Article371H: Special provision with respect to the State of Arunachal Pradesh.";
var art371I = "Article371I: Special provision with respect to the State of Goa.";
var art371J = "Article371J: Special provision with respect to the State of Karnataka.";
var art372 = "Article372: Continuance in force of existing laws and their adaptation.";
var art372A = "Article372A: Power of the President to adapt laws.";
var art373 = "Article373: Power of President to make order in respect of persons under preventive detention in certain cases.";
var art374 = "Article374: Provisions as to Judges of the Federal Court and proceedings pending in the Federal Court or before His Majesty in Council.";
var art375 = "Article375: Courts, authorities and officers to continue to function subject to the provisions of the Constitution.";
var art376 = "Article376: Provisions as to Judges of High Courts.";
var art377 = "Article377: Provisions as to Comptroller and Auditor-General of India.";
var art378 = "Article378: Provisions as to Public Service Commissions.";
var art378A = "Article378A: Special provision as to the duration of Andhra Pradesh Legislative Assembly.";
var art392 = "Article392: Power of the President to remove difficulties.";
var art393 = "Article393: Short title.";
var art394 = "Article394: Commencement.";
var art394A = "Article394A: Authoritative text in the Hindi language.";
var art395 = "Article395: [Repealed.]";
Arts="";
var artno;
for(var i=0;i<Blank.length;i++){
   artno=Blank[i].substr(3);
   for(var j=artno.length-1;j>0;j--){
      if(1000>Blank[i].substr(3)[j]){
         break;
      }
      else{
         artno=Blank[i].substr(3,j)+"."+Blank[i].substr(3)[j].charCodeAt(0);
      }
   }
   part=partdt(artno);
   Arts+="<button class='acc'>"+eval(Blank[i])+"</button>";
   Arts+="<div class='pan'><div class='panin'>";
   for(var k=0;k<3;k++){
      Arts+=part[k]+"<br>";
   }
   Arts+="</div></div>";
}
return Arts;
}