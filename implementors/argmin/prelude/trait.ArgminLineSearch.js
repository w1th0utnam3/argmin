(function() {var implementors = {};
implementors["argmin"] = [{text:"impl&lt;O, L&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminLineSearch.html\" title=\"trait argmin::prelude::ArgminLineSearch\">ArgminLineSearch</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/backtracking/struct.BacktrackingLineSearch.html\" title=\"struct argmin::solver::linesearch::backtracking::BacktrackingLineSearch\">BacktrackingLineSearch</a>&lt;O, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"argmin/solver/linesearch/condition/trait.LineSearchCondition.html\" title=\"trait argmin::solver::linesearch::condition::LineSearchCondition\">LineSearchCondition</a>&lt;O::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::backtracking::BacktrackingLineSearch"]},{text:"impl&lt;O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminLineSearch.html\" title=\"trait argmin::prelude::ArgminLineSearch\">ArgminLineSearch</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/hagerzhang/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{text:"impl&lt;O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminLineSearch.html\" title=\"trait argmin::prelude::ArgminLineSearch\">ArgminLineSearch</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/morethuente/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::morethuente::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;&lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, &lt;O as <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOp.html\" title=\"trait argmin::prelude::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/prelude/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::prelude::ArgminOp::Param\">Param</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
