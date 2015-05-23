walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bsnep\b/g, "shep");
	v = v.replace(/\bSnep\b/g, "Shep");
	v = v.replace(/\bSNEP\b/g, "SHEP");
	v = v.replace(/\bsneps\b/g, "sheps");
	v = v.replace(/\bSneps\b/g, "Sheps");
	v = v.replace(/\bsneppy\b/g, "sheppy");
	v = v.replace(/\bSneppy\b/g, "Sheppy");
	v = v.replace(/\bsnow leopard\b/g, "german shepherd");
	v = v.replace(/\bSnow leopard\b/g, "German shepherd");
	v = v.replace(/\bSnow Leopard\b/g, "German Shepherd");
	v = v.replace(/\b\*homph\*\b/g, "*wag*");
	v = v.replace(/\b\*homphs\*\b/g, "*wags*");
	v = v.replace(/\bhomph\b/g, "wag");
	v = v.replace(/\bhomphs\b/g, "wags");

	textNode.nodeValue = v;
}
