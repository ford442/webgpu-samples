_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1uVF":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return s}));var r=40,a=0,i=16,o=32,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},bgyd:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),i=t("HaE+"),o=t("IOcx"),s=t("SoUo"),u=t("1uVF"),c=t("PpzT");function l(){return(l=Object(i.a)(a.a.mark((function e(n,r){var i,s,l,d,p,g,v,x,h,b,y,P,S,w,T,U,M,V,B,G;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G=function(){var e=o.a.create();o.a.translate(e,e,o.b.fromValues(0,0,-4));var n=Date.now()/1e3;o.a.rotate(e,e,1,o.b.fromValues(Math.sin(n),Math.cos(n),0));var t=o.a.create();return o.a.multiply(t,p,e),t},e.next=3,navigator.gpu.requestAdapter();case 3:return i=e.sent,e.next=6,i.requestDevice();case 6:return s=e.sent,e.next=9,Object(c.a)();case 9:return l=e.sent,d=Math.abs(n.width/n.height),p=o.a.create(),o.a.perspective(p,2*Math.PI/5,d,1,100),g=n.getContext("gpupresent"),v=g.configureSwapChain({device:s,format:"bgra8unorm"}),x=s.createBuffer({size:u.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(x.getMappedRange()).set(u.d),x.unmap(),h=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,type:"uniform-buffer"},{binding:1,visibility:GPUShaderStage.FRAGMENT,type:"sampler"},{binding:2,visibility:GPUShaderStage.FRAGMENT,type:"sampled-texture"}]}),b=s.createPipelineLayout({bindGroupLayouts:[h]}),y=s.createRenderPipeline({layout:b,vertexStage:{module:r?s.createShaderModule({code:f.vertex}):s.createShaderModule({code:m.vertex,transform:function(e){return l.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:r?s.createShaderModule({code:f.fragment}):s.createShaderModule({code:m.fragment,transform:function(e){return l.compileGLSL(e,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:u.e,attributes:[{shaderLocation:0,offset:u.b,format:"float4"},{shaderLocation:1,offset:u.c,format:"float2"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),P=s.createTexture({size:{width:n.width,height:n.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),S={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:P.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},64,w=s.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),(U=document.createElement("img")).src=t("neuz"),e.next=29,U.decode();case 29:return e.next=31,createImageBitmap(U);case 31:return M=e.sent,T=s.createTexture({size:[M.width,M.height,1],format:"rgba8unorm",usage:GPUTextureUsage.SAMPLED|GPUTextureUsage.COPY_DST}),s.defaultQueue.copyImageBitmapToTexture({imageBitmap:M},{texture:T},[M.width,M.height,1]),V=s.createSampler({magFilter:"linear",minFilter:"linear"}),B=s.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:w}},{binding:1,resource:V},{binding:2,resource:T.createView()}]}),e.abrupt("return",(function(){var e=G();s.defaultQueue.writeBuffer(w,0,e.buffer,e.byteOffset,e.byteLength),S.colorAttachments[0].attachment=v.getCurrentTexture().createView();var n=s.createCommandEncoder(),t=n.beginRenderPass(S);t.setPipeline(y),t.setBindGroup(0,B),t.setVertexBuffer(0,x),t.draw(36,1,0,0),t.endPass(),s.defaultQueue.submit([n.finish()])}));case 37:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\nlayout(location = 1) out vec4 fragPosition;\n\nvoid main() {\n  fragPosition = 0.5 * (position + vec4(1.0));\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 1) uniform sampler mySampler;\nlayout(set = 0, binding = 2) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 1) in vec4 fragPosition;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor =  texture(sampler2D(myTexture, mySampler), fragUV) * fragPosition;\n}\n"},f={vertex:"\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> uv : vec2<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragUV : vec2<f32>;\n[[location(1)]] var<out> fragPosition: vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n  return;\n}\n",fragment:"\n[[binding(1), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(2), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragUV: vec2<f32>;\n[[location(1)]] var<in> fragPosition: vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor =  textureSample(myTexture, mySampler, fragUV) * fragPosition;\n  return;\n}\n"};n.default=Object(s.a)({name:"Textured Cube",description:"This example shows how to bind and sample textures.",slug:"texturedCube",init:function(e,n){return l.apply(this,arguments)},wgslShaders:f,glslShaders:m,source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n} from '../../meshes/cube';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const bindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        // Transform\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        type: 'uniform-buffer',\n      },\n      {\n        // Sampler\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: 'sampler',\n      },\n      {\n        // Texture view\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        type: 'sampled-texture',\n      },\n    ],\n  });\n\n  const pipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [bindGroupLayout],\n  });\n\n  const pipeline = device.createRenderPipeline({\n    layout: pipelineLayout,\n\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    vertexState: {\n      vertexBuffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float2',\n            },\n          ],\n        },\n      ],\n    },\n\n    rasterizationState: {\n      cullMode: 'back',\n    },\n\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const depthTexture = device.createTexture({\n    size: { width: canvas.width, height: canvas.height, depth: 1 },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        attachment: undefined, // Assigned later\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  let cubeTexture: GPUTexture;\n  {\n    const img = document.createElement('img');\n    img.src = require('../../../assets/img/Di-3d.png');\n    await img.decode();\n    const imageBitmap = await createImageBitmap(img);\n\n    cubeTexture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      format: 'rgba8unorm',\n      usage: GPUTextureUsage.SAMPLED | GPUTextureUsage.COPY_DST,\n    });\n    device.defaultQueue.copyImageBitmapToTexture(\n      { imageBitmap },\n      { texture: cubeTexture },\n      [imageBitmap.width, imageBitmap.height, 1]\n    );\n  }\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.create();\n    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -4));\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      viewMatrix,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n\n    const modelViewProjectionMatrix = mat4.create();\n    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  return function frame() {\n    const transformationMatrix = getTransformationMatrix();\n    device.defaultQueue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(36, 1, 0, 0);\n    passEncoder.endPass();\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\nlayout(location = 1) out vec4 fragPosition;\n\nvoid main() {\n  fragPosition = 0.5 * (position + vec4(1.0));\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n}\n`,\n\n  fragment: `#version 450\nlayout(set = 0, binding = 1) uniform sampler mySampler;\nlayout(set = 0, binding = 2) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 1) in vec4 fragPosition;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor =  texture(sampler2D(myTexture, mySampler), fragUV) * fragPosition;\n}\n`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> uv : vec2<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragUV : vec2<f32>;\n[[location(1)]] var<out> fragPosition: vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragUV = uv;\n  return;\n}\n`,\n  fragment: `\n[[binding(1), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(2), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragUV: vec2<f32>;\n[[location(1)]] var<in> fragPosition: vec4<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  outColor =  textureSample(myTexture, mySampler, fragUV) * fragPosition;\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Textured Cube',\n  description: 'This example shows how to bind and sample textures.',\n  slug: 'texturedCube',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})},neuz:function(e,n){e.exports="/webgpu-samples/_next/static/e04932ba9c013b60ddb249577c386914.png"},"u+5N":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/texturedCube",function(){return t("bgyd")}])}},[["u+5N",0,1,4,2,3,5]]]);