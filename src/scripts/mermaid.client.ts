import mermaid from 'mermaid';

const renderMermaid = () => {
	const codeBlocks = document.querySelectorAll('pre[data-language="mermaid"]');
	if (!codeBlocks.length) return;
	codeBlocks.forEach((pre) => {
		const code = pre.querySelector('code');
		const wrapper = document.createElement('div');
		wrapper.classList.add('mermaid');
		wrapper.textContent = code?.textContent ?? pre.textContent ?? '';
		pre.replaceWith(wrapper);
	});
	mermaid.initialize({ startOnLoad: false });
	mermaid.run();
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', renderMermaid, { once: true });
} else {
	renderMermaid();
}
